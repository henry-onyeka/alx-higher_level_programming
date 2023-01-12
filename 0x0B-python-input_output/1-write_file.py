  6 
  7 def number_of_lines(filename=""):
  8     """ Function that reads from a file and prints its number of lines
  9     Args:
 10         filename: filename
 11     Raises
 12         Exception: when the file can be opened
 13     """
 14     xters = 0
 15     with open('filename', 'r', encoding = "utf-8") as something:
 16         for line in something: 
 17             xters += 1
 18     return xters
