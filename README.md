# Web Services - Excellent Studnts API
##### The purpose of this Wev Service is to manage stock of students.
##### It contains 3 functions in GET method and returns JSON object with the data.

### The 3 functions :
###### getAllExcellentStudents
###### getStudentByID(id)
###### getAllStudentsByYear(year)

### How to run it ?
1. Clone the project to your desktop or just download the ZIP file.
2. If you download the ZIP file, extract it.
3. Open your Terminal | CMD and drag this folder to there.
4. Write the command - 'node index.js'
5. Now you need to use the routs below, have fun.

### Obtaining All The Excellent Students 
   * In order to obtain all the excellent students you need to add the following link:                       
  -> 'http://localhost:3000/allexcellentstudents'                   
  -> 'https://itaycollege.herokuapp.com/allexcellentstudents'                

###### The JSON response 
    [
      {"studentName":"Yaniv Shal","ID":2,"Year":"2005","grade":"90"},
      {"studentName":"shalev Bil","ID":3,"Year":"2009","grade":"85"},
      {"studentName":"Itay Noa","ID":6,"Year":"2016","grade":"100"}
    ]

### Obtaining Specific Student By ID
   * In order to obtain specific student by id you need to add the following link:                   
  -> 'http://localhost:3000/student/[id]'          
  -> 'https://itaycollege.herokuapp.com/student/[id]'         
  * Change the [id] with number between 1-6

###### The JSON response 
    {"studentName":"Israel Cohen","ID":1,"Year":"2015","grade":"80"}

### Obtaining Students By Year
   * In order to obtain students by a certain year you need to add the following link:             
  -> 'http://localhost:3000/studentyear/[year]'          
  -> 'https://itaycollege.herokuapp.com/studentyear/[year]'         
  * Change the [year] with one of this years - {2005, 2009, 2010, 2015, 2016}

###### The JSON response 
    [{"studentName":"Itay Noa","ID":6,"Year":"2016","grade":"100"}]
