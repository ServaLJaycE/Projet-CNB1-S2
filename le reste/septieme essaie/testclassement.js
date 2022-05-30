var file = new ActiveXObject("Scripting.FileSystemObject");
var a = file.CreateTextFile("textfiles.txt", true);
a.WriteLine(userScore);
a.Close();