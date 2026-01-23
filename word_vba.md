Sub ConvertLatexToWordMath()
    ' This macro finds text enclosed in $$...$$ or $...$ and converts it to Word Math Zones.
    ' It relies on Word's built-in "Linear Format" converter (BuildUp).
    
    Dim doc As Document
    Dim rng As Range
    Dim searchRange As Range
    Dim mathRng As Range
    Dim startPos As Long
    Dim endPos As Long
    Dim rawText As String
    
    Set doc = ActiveDocument
    Application.ScreenUpdating = False
    
    ' ---------------------------------------------------------
    ' PART 1: Convert Block Equations ($$ ... $$)
    ' ---------------------------------------------------------
    Set searchRange = doc.Content
    
    Do
        ' Find opening $$
        With searchRange.Find
            .ClearFormatting
            .Text = "$$"
            .Forward = True
            .Wrap = wdFindStop
            .Execute
        End With
        
        If Not searchRange.Find.Found Then Exit Do
        
        startPos = searchRange.Start
        
        ' Collapse to end to find the closing $$
        searchRange.Collapse Direction:=wdCollapseEnd
        
        ' Find closing $$
        With searchRange.Find
            .ClearFormatting
            .Text = "$$"
            .Forward = True
            .Wrap = wdFindStop
            .Execute
        End With
        
        If searchRange.Find.Found Then
            endPos = searchRange.End
            
            ' Define the full range including delimiters
            Set mathRng = doc.Range(Start:=startPos, End:=endPos)
            
            ' Extract text inside (remove first 2 and last 2 chars)
            rawText = Mid(mathRng.Text, 3, Len(mathRng.Text) - 4)
            rawText = Trim(rawText)
            
            ' Replace range with raw text
            mathRng.Text = rawText
            
            ' Convert to Math Zone
            mathRng.OMaths.Add mathRng
            ' BuildUp converts the Linear format (LaTeX-like) to Professional format
            mathRng.OMaths(1).BuildUp
            
            ' Reset search range to start after this equation
            searchRange.Start = mathRng.End
            searchRange.End = doc.Content.End
        Else
            Exit Do
        End If
    Loop
    
    ' ---------------------------------------------------------
    ' PART 2: Convert Inline Equations ($ ... $)
    ' Note: This assumes you don't use $ for currency in the same text block.
    ' ---------------------------------------------------------
    Set searchRange = doc.Content
    
    Do
        ' Find opening $
        With searchRange.Find
            .ClearFormatting
            .Text = "$"
            .Forward = True
            .Wrap = wdFindStop
            .MatchWildcards = False
            .Execute
        End With
        
        If Not searchRange.Find.Found Then Exit Do
        
        startPos = searchRange.Start
        
        ' Collapse to end to find the closing $
        searchRange.Collapse Direction:=wdCollapseEnd
        
        ' Find closing $
        With searchRange.Find
            .ClearFormatting
            .Text = "$"
            .Forward = True
            .Wrap = wdFindStop
            .Execute
        End With
        
        If searchRange.Find.Found Then
            endPos = searchRange.End
            
            ' Check if it's an empty math block or back-to-back $$
            If endPos - startPos > 1 Then
                Set mathRng = doc.Range(Start:=startPos, End:=endPos)
                
                ' Extract text inside (remove first 1 and last 1 char)
                rawText = Mid(mathRng.Text, 2, Len(mathRng.Text) - 2)
                
                ' Replace range with raw text
                mathRng.Text = rawText
                
                ' Convert to Math Zone
                mathRng.OMaths.Add mathRng
                mathRng.OMaths(1).BuildUp
                
                ' Reset search range
                searchRange.Start = mathRng.End
                searchRange.End = doc.Content.End
            Else
                 ' Skip if it was just $$ that was processed or empty
                 searchRange.Collapse Direction:=wdCollapseEnd
            End If
        Else
            Exit Do
        End If
    Loop

    Application.ScreenUpdating = True
    MsgBox "LaTeX conversion complete!", vbInformation
End Sub
