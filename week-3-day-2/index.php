<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
       class Student{
        public $name;
        public $studentID;
        public function __construct($name,$studentID)
        {
            $this->name=$name;
            $this->studentID=$studentID;
        }

        public function displayInfo(){
            echo "Name: ". $this->name ."<br>";
            echo "Student ID: " . $this->studentID . "<br><br>";
        }
       }

       $student1=new Student("MELALA",101);
       $student2=new Student("Yosef",102);
       $student1->displayInfo();
       $student2->displayInfo();
    ?>
</body>
</html>