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
       

        class Product{
        public $name;
        public $price;
        public $quantity;

        public function __construct($name,$price,$quantity){
            $this->name=$name;
            $this->price=$price;
            $this->quantity=$quantity;
        }
        public function Description(){
            echo "Name: ".$this->name."<br>". "Price: ".$this->price ."<br>"."Quantity: ".$this->quantity . "<br>";
        }
        public function calculateTotal(){
            return $this->price*$this->quantity;        }
        
        }

        $product1=new Product("Notebook",100,3);
        $product2=new Product("Pen",20,5);
        $product1->Description();
        echo "Total: " .$product1->calculateTotal()."<br><br>";
        $product2->Description();
        echo "Total: " .$product2->calculateTotal();
       


        
class BankAccount {
    public $owner;
    private $balance;

    public function __construct($owner, $balance) {
        $this->owner = $owner;
        $this->balance = $balance;
    }

    public function deposit($amount) {
        if ($amount <= 0) {
            return "The deposit amount must be positive.";
        }

        $this->balance += $amount;
        return "Deposit successful.";
    }

    public function displayBalance() {
        echo "Account Owner: " . $this->owner . "<br>";
        echo "Current Balance: " . $this->balance . "<br>";
    }
}

$bankAccount1 = new BankAccount("Melala", 500);

echo $bankAccount1->deposit(200) . "<br>";
$bankAccount1->displayBalance();

echo "<br>" . $bankAccount1->deposit(-50) . "<br>";
$bankAccount1->displayBalance();

    ?>
</body>
</html>