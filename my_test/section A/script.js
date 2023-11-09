const modal = document.querySelector(".form-modal");

const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    
  };

  // Modal close function
const closeModal = () => {
    
    modal.classList.remove("active");
    
    console.log("modal is closed");

    overlay.classList.remove("overlayactive");
    
  };
  
  const form = document.getElementById("myForm");

  const formData = {};  

  // Add an event listener for the form's submit event
  form.addEventListener("submit", function(event) {


         

      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the values from the form inputs
      const name = document.getElementById("Name").value;
      const email = document.getElementById("Email").value;
      const orderComment=document.getElementById("Ordercomment").value;

      // Do something with the input values (e.g., display them)
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Order : " + orderComment);


       // Store the values in the formData object
       formData.name = name;
       formData.email = email;
       formData.orderComment=orderComment;

       // Do something with the formData object
       console.log("Form Data:", formData);

      // You can also perform additional actions or validation here

       
      // const CODE="CNG6AH8Y0MCXQ9KTHFXIL6GI3";
      fetch('https://forms.maakeetoo.com/formapi/306', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'Code:CNG6AH8Y0MCXQ9KTHFXIL6GI3',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

     // curl --header;"Content-Type: application/json" --request; POST --data '{"name": "John Doe", "email": "johndoe@example.com"}' <endpoint>
       
    // curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com"}' <endpoint>

    
      // Reset the form if needed
      form.reset();
  });

 
//curl -X POST -H "Code:CNG6AH8Y0MCXQ9KTHFXIL6GI3" -d '{"name": "John Doe", 
//"email": "johndoe@example.com"}' https://forms.maakeetoo.com/formapi/306

