/* INSTRUCTIONS TO TRY IT OUT -- 
    If a .txt file exists, delete it. Check that the second argument in the fs.open function is 'w', if not change it to 'w'. Then run the program by entering "node tryFsOpen" without the quotation marks in the CLI within your terminal. 
*/

const fs = require('fs'); /* uses built-in file system module in node.js */

fs.open('aNewTextFile.txt', 'w', function (err, file) { /* opens the file name in the first argument or creates a file with the name of the first argument it does not exist. The second argument is a flag, the flags and their role are described in comments at end. In this case, w is used, which stands for writing. */
 if (err) throw err; /* If an error occurs, output the error info to the terminal */
 console.log(`Open function processed!`); /* a good response, e.g., no error, prints text indicated to console to inform us that open function was successful */
});

/*
FLAGS for fs within NODE

1.	
r

Open file for reading. An exception occurs if the file does not exist.

2.	
r+

Open file for reading and writing. An exception occurs if the file does not exist.

3.	
rs

Open file for reading in synchronous mode.

4.	
rs+

Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.

5.	
w

Open file for writing. The file is created (if it does not exist) or truncated (if it exists).

6.	
wx

Like 'w' but fails if the path exists.

7.	
w+

Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

8.	
wx+

Like 'w+' but fails if path exists.

9.	
a

Open file for appending. The file is created if it does not exist.

10.	
ax

Like 'a' but fails if the path exists.

11.	
a+

Open file for reading and appending. The file is created if it does not exist.

12.	
ax+

Like 'a+' but fails if the the path exists. */