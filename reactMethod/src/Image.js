import React, { useState } from 'react'
import './style.css';

const id = 0;

export default function Image() {
    const [image, setImage] = useState(
        { id: id, imageSrc: "./images/Bear.jpg", animal: "Bear" },
    );

    const animals = [
        { id: 0, imageSrc: "./images/Bear.jpg", animal: "Bear" },
        { id: 1, imageSrc: "./images/Bird.jpg", animal: "Bird" },
        { id: 2, imageSrc: "./images/Cat.jpg", animal: "Cat" },
        { id: 3, imageSrc: "./images/Cow.jpg", animal: "Cow" },
        { id: 4, imageSrc: "./images/Dear.jpg", animal: "Dear" },
        { id: 5, imageSrc: "./images/Dinosuar.jpg", animal: "Dinosuar" },
        { id: 6, imageSrc: "./images/Dog.jpg", animal: "Dog" },
        { id: 7, imageSrc: "./images/Dolphin.jpg", animal: "Dolphin" },
        { id: 8, imageSrc: "./images/Duck.jpg", animal: "Duck" },
        { id: 9, imageSrc: "./images/Elephant.jpg", animal: "Elephant" },
        { id: 10, imageSrc: "./images/Fox.jpg", animal: "Fox" },
        { id: 11, imageSrc: "./images/Giraffe.jpg", animal: "Giraffe" },
        { id: 12, imageSrc: "./images/Goat.jpg", animal: "Goat" },
        { id: 13, imageSrc: "./images/Horse.jpg", animal: "Horse" },
        { id: 14, imageSrc: "./images/Horse2.jpg", animal: "Horse2" },
        { id: 15, imageSrc: "./images/Lion.jpg", animal: "Lion" },
        { id: 16, imageSrc: "./images/Monkey.jpg", animal: "Monkey" },
        { id: 17, imageSrc: "./images/Owl.jpg", animal: "Owl" },
        { id: 18, imageSrc: "./images/Rhinoceros.jpg", animal: "Rhinoceros" },
        { id: 19, imageSrc: "./images/Seahorse.jpg", animal: "Seahorse" },
        { id: 20, imageSrc: "./images/Sheep.jpg", animal: "Sheep" },
        { id: 21, imageSrc: "./images/Tiger.jpg", animal: "Tiger" },
        { id: 22, imageSrc: "./images/Wolf.jpg", animal: "Wolf" },
        { id: 23, imageSrc: "./images/Zebra.jpg", animal: "Zebra" },
        { id: 24, imageSrc: "./images/Hippos.png", animal: "Hippos" },
        { id: 25, imageSrc: "./images/Penguin.png", animal: "Penguin" }
    ];


    const changeImage = (id) => {
            if (id === 25){
                setImage({ id: 0, imageSrc: "./images/Bear.jpg", animal: "Bear" });
            }else if (id === animals[id].id) {
                setImage({ id: parseInt([id + 1]),imageSrc: animals[id + 1].imageSrc, animal: animals[id + 1].animal });
            } else {
                setImage({ id: parseInt([0]), imageSrc: animals[0].imageSrc, animal: animals[0].animal });
            }
    };
    
  return (
    <>
    <img src={require(`${image.imageSrc}`)} alt={image.animal} onClick={() => changeImage(image.id)} />
    </>
  )
}
