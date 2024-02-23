document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");

    imageContainer.addEventListener("click", function (event) {
        const selectedCard = event.target.closest(".image-card");
        document.querySelectorAll(".image-card").forEach(card => {
            card.classList.remove("selected-card");
        });
        if (selectedCard) {
            selectedCard.classList.add("selected-card");
        }
    });
    const imagesJson = [
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png", "name": "Dr. John Doe", "occupation": "Ophthalmology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-40.png", "name": "Dr. Emily Johnson ", "occupation": "Pediatrics" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png", "name": "Dr. Jane Smith", "occupation": "Orthopedics" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/basic-ideas-for-logical-programs-for-doctor-home-loan-6.png", "name": "Dr. Daniel Harris", "occupation": "Emergency Medicine" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-37.png", "name": "Dr. Sarah Miller", "occupation": "Cardiology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-yashfeen-hospital-navsari-39.png", "name": "Dr. Jessica Martinez", "occupation": "Obstetrics and Gynecology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/woman-doctor-png-transparent-woman-doctor-images-7.png", "name": "Dr. Megan Davis", "occupation": "Neurology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-17.png","name":"Dr. Alexandra Smith ", "occupation": " Internal Medicine" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-align-with-lower-cost-and-increased-quality-alignment-21.png", "name": "Dr. Henry White ", "occupation": "Pediatrics" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-png-transparent-doctor-images-pluspng-10.png", "name": "Dr. Olivia Taylor ", "occupation": "Psychiatry" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/dentist-doctor-bhubaneswar-medical-doctor-36.png", "name": "Dr. Isaac Taylor", "occupation": "Internal Medicine" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-declaire-lamacchia-orthopaedic-institute-15.png", "name": "Dr. Jackson Clark", "occupation": "Psychiatry" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-essentia-health-12.png", "name": "Dr. Lauren Anderson", "occupation": " Dermatology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-bikowski-skin-care-center-sewickey-pennsylvania-home-35.png", "name": "Dr. Kevin Anderson", "occupation": "Radiology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-petit-asianfanfics-28.png", "name": "Dr. Rachel White ", "occupation": "Orthopedics" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-4.png", "name": "Dr. Grace Robinson", "occupation": "Ophthalmology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-png-image-pngpix-1.png", "name": "Dr. Nathan Brown", "occupation": "Infectious Diseases" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-11.png", "name": "Dr. Isabella Garcia", "occupation": "Family Medicine" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-png-transparent-doctor-images-0.png", "name": "Dr. Madison Brown", "occupation": "Radiology" },
        { "image": "https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
 
    ];

    imagesJson.forEach(imageObj => {
        const imageCard = document.createElement("div");
        imageCard.classList.add("image-card");

        const imgElement = document.createElement("img");
        imgElement.src = imageObj.image;
        imgElement.alt = "User Image";

        const userInfo = document.createElement("div");
        userInfo.classList.add("user-info");
        userInfo.innerHTML = `<strong>${imageObj.name}</strong><br>${imageObj.occupation}`;

        imageCard.appendChild(imgElement);
        imageCard.appendChild(userInfo);
        imageContainer.appendChild(imageCard);
    });
});