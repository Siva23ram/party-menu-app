import vegPakora from '../images/veg_pakora.jpg';
import pannertikka from '../images/panner_tikka.jpg';
import alootikka from '../images/aloo_tikka.jpg';
import chicken_65 from '../images/chicken_65.jpg';
import chicken_wings from '../images/spice_chicken_wings.jpg';
import mutton_kebab from '../images/mutton_kebab.jpg';
import Saffron_Pulao from '../images/Saffron Pulao.jpg';
import vegetable_pickle from '../images/Vegetable Biryani.jpg';
import lemon_rice from '../images/Lemon Rice.jpg';
import chicken_biryani from '../images/Chicken Biryani.jpg';
import mutton_biryani from '../images/Mutton Biryani.jpg';
import fish_curry from '../images/Fish Curry with Rice.jpg';
import Kheer from '../images/Kheer.jpg';
import SoojiHalwa from '../images/Sooji Halwa.jpg';
import GulabJamun from '../images/Gulab Jamun.jpg';
import KheeraRaita from '../images/Kheera Raita.jpg';
import AlooFry from '../images/Aloo Fry.jpg';
import TomatoOnionSalad from '../images/Tomato Onion Salad.jpg';
import DalTadka from '../images/Dal Tadka.jpg';



export const dishes=
[
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Grilled paneer cubes marinated in spices.",
    "image": pannertikka,
    "category": {
      "id": 1,
      "name": "North Indian",
      "image":pannertikka,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 1,
    "name": "Paneer Tikka",
    "ingredients": [
      { "name": "Paneer", "quantity": "250g" },
      { "name": "Yogurt", "quantity": "100g" },
      { "name": "Red chili powder", "quantity": "1 tsp" },
      { "name": "Turmeric", "quantity": "1/2 tsp" },
      { "name": "Ginger-garlic paste", "quantity": "1 tbsp" },
      { "name": "Lemon juice", "quantity": "1 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Oil", "quantity": "2 tbsp" },
      { "name": "Bell peppers", "quantity": "1 medium, chopped" },
      { "name": "Onions", "quantity": "1 medium, chopped" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Crispy fried vegetable pakoras.",
    "image": vegPakora,
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": vegPakora,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 2,
    "name": "Vegetable Pakora",
    "ingredients": [
      { "name": "Gram flour", "quantity": "1 cup" },
      { "name": "Potatoes", "quantity": "2 medium, sliced" },
      { "name": "Spinach", "quantity": "1 cup, chopped" },
      { "name": "Onions", "quantity": "1 medium, sliced" },
      { "name": "Green chili", "quantity": "1, chopped" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Turmeric", "quantity": "1/2 tsp" },
      { "name": "Cumin seeds", "quantity": "1 tsp" },
      { "name": "Oil", "quantity": "for deep frying" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Spiced potato patties fried to perfection.",
    "image": alootikka,
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": alootikka,
       "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 3,
    "name": "Aloo Tikki",
    "ingredients": [
      { "name": "Potatoes", "quantity": "3 medium, boiled and mashed" },
      { "name": "Green chili", "quantity": "1, chopped" },
      { "name": "Ginger", "quantity": "1 tsp, grated" },
      { "name": "Coriander leaves", "quantity": "2 tbsp, chopped" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Oil", "quantity": "for frying" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Spicy deep-fried chicken bites.",
    "image": chicken_65,
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": chicken_65,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 4,
    "name": "Chicken 65",
    "ingredients": [
      { "name": "Chicken", "quantity": "300g, boneless" },
      { "name": "Yogurt", "quantity": "100g" },
      { "name": "Red chili powder", "quantity": "1 tbsp" },
      { "name": "Ginger-garlic paste", "quantity": "1 tbsp" },
      { "name": "Curry leaves", "quantity": "10-12 leaves" },
      { "name": "Green chili", "quantity": "2, chopped" },
      { "name": "Cornflour", "quantity": "2 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Oil", "quantity": "for deep frying" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Tender chicken wings tossed in spicy sauce.",
    "image": chicken_wings,
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": chicken_wings,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 5,
    "name": "Spicy Chicken Wings",
    "ingredients": [
      { "name": "Chicken wings", "quantity": "500g" },
      { "name": "Hot sauce", "quantity": "3 tbsp" },
      { "name": "Butter", "quantity": "2 tbsp" },
      { "name": "Garlic", "quantity": "3 cloves, minced" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Black pepper", "quantity": "1 tsp" },
      { "name": "Paprika", "quantity": "1 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Succulent mutton kebabs with aromatic spices.",
    "image": mutton_kebab,
    "category": {
      "id": 3,
      "name": "Mughlai",
      "image": mutton_kebab,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 6,
    "name": "Mutton Seekh Kebab",
    "ingredients": [
      { "name": "Minced mutton", "quantity": "400g" },
      { "name": "Onions", "quantity": "1 medium, finely chopped" },
      { "name": "Green chili", "quantity": "2, finely chopped" },
      { "name": "Ginger-garlic paste", "quantity": "1 tbsp" },
      { "name": "Coriander leaves", "quantity": "1/4 cup, chopped" },
      { "name": "Garam masala", "quantity": "1 tsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Skewers", "quantity": "as needed" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Fragrant basmati rice cooked with aromatic spices and saffron.",
    "image": Saffron_Pulao,
    "category": {
      "id": 1,
      "name": "North Indian",
       "image": Saffron_Pulao,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 11,
    "name": "Saffron Pulao",
    "ingredients": [
      { "name": "Basmati rice", "quantity": "2 cups" },
      { "name": "Saffron strands", "quantity": "1/2 tsp" },
      { "name": "Ghee", "quantity": "2 tbsp" },
      { "name": "Cinnamon stick", "quantity": "1 inch" },
      { "name": "Cloves", "quantity": "3" },
      { "name": "Cardamom pods", "quantity": "3" },
      { "name": "Bay leaf", "quantity": "1" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Water", "quantity": "4 cups" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Spiced vegetable biryani layered with fragrant rice and herbs.",
    "image": vegetable_pickle,
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": vegetable_pickle,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 12,
    "name": "Vegetable Biryani",
    "ingredients": [
      { "name": "Basmati rice", "quantity": "2 cups" },
      { "name": "Mixed vegetables", "quantity": "250g" },
      { "name": "Onions", "quantity": "2 medium, sliced" },
      { "name": "Tomatoes", "quantity": "2 medium, chopped" },
      { "name": "Yogurt", "quantity": "100g" },
      { "name": "Ginger-garlic paste", "quantity": "1 tbsp" },
      { "name": "Biryani masala", "quantity": "2 tbsp" },
      { "name": "Mint leaves", "quantity": "1/4 cup" },
      { "name": "Coriander leaves", "quantity": "1/4 cup" },
      { "name": "Saffron", "quantity": "1/4 tsp soaked in 2 tbsp warm milk" },
      { "name": "Oil", "quantity": "3 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Water", "quantity": "4 cups" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Creamy and mildly spiced lemon rice with mustard seeds and curry leaves.",
    "image": lemon_rice,
    "category": {
      "id": 1,
      "name": "South Indian",
      "image": lemon_rice,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 13,
    "name": "Lemon Rice",
    "ingredients": [
      { "name": "Cooked rice", "quantity": "3 cups" },
      { "name": "Mustard seeds", "quantity": "1 tsp" },
      { "name": "Green chilies", "quantity": "2, chopped" },
      { "name": "Curry leaves", "quantity": "10 leaves" },
      { "name": "Turmeric powder", "quantity": "1/2 tsp" },
      { "name": "Lemon juice", "quantity": "3 tbsp" },
      { "name": "Peanuts", "quantity": "1/4 cup" },
      { "name": "Oil", "quantity": "2 tbsp" },
      { "name": "Salt", "quantity": "to taste" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Aromatic chicken biryani cooked with spices and layered with saffron rice.",
    "image": chicken_biryani,
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": chicken_biryani,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 14,
    "name": "Chicken Biryani",
    "ingredients": [
      { "name": "Basmati rice", "quantity": "2 cups" },
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Onions", "quantity": "2 medium, sliced" },
      { "name": "Tomatoes", "quantity": "2 medium, chopped" },
      { "name": "Yogurt", "quantity": "100g" },
      { "name": "Ginger-garlic paste", "quantity": "1 tbsp" },
      { "name": "Biryani masala", "quantity": "2 tbsp" },
      { "name": "Mint leaves", "quantity": "1/4 cup" },
      { "name": "Coriander leaves", "quantity": "1/4 cup" },
      { "name": "Saffron", "quantity": "1/4 tsp soaked in 2 tbsp warm milk" },
      { "name": "Oil", "quantity": "3 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Water", "quantity": "4 cups" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Spicy mutton biryani cooked with fragrant rice and rich spices.",
    "image":mutton_biryani,
    "category": {
      "id": 3,
      "name": "Mughlai",
      "image":mutton_biryani,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 15,
    "name": "Mutton Biryani",
    "ingredients": [
      { "name": "Basmati rice", "quantity": "2 cups" },
      { "name": "Mutton", "quantity": "600g" },
      { "name": "Onions", "quantity": "2 medium, sliced" },
      { "name": "Tomatoes", "quantity": "2 medium, chopped" },
      { "name": "Yogurt", "quantity": "100g" },
      { "name": "Ginger-garlic paste", "quantity": "2 tbsp" },
      { "name": "Biryani masala", "quantity": "2 tbsp" },
      { "name": "Mint leaves", "quantity": "1/4 cup" },
      { "name": "Coriander leaves", "quantity": "1/4 cup" },
      { "name": "Saffron", "quantity": "1/4 tsp soaked in 2 tbsp warm milk" },
      { "name": "Oil", "quantity": "3 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Water", "quantity": "4 cups" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Fish cooked in a tangy and spicy coconut-based curry with rice.",
    "image": fish_curry,
    "category": {
      "id": 4,
      "name": "Coastal",
      "image": fish_curry,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 16,
    "name": "Fish Curry with Rice",
    "ingredients": [
      { "name": "Fish", "quantity": "500g" },
      { "name": "Basmati rice", "quantity": "2 cups" },
      { "name": "Coconut milk", "quantity": "200ml" },
      { "name": "Tamarind paste", "quantity": "1 tbsp" },
      { "name": "Onions", "quantity": "1 large, chopped" },
      { "name": "Tomatoes", "quantity": "2 medium, chopped" },
      { "name": "Green chili", "quantity": "2, chopped" },
      { "name": "Mustard seeds", "quantity": "1 tsp" },
      { "name": "Curry leaves", "quantity": "10 leaves" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Oil", "quantity": "3 tbsp" }
    ]
  },
  
  {
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Sweetened condensed milk cooked with nuts and flavored with cardamom.",
    "image": Kheer,
    "category": {
      "id": 5,
      "name": "Indian Desserts",
      "image": Kheer,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 21,
    "name": "Kheer",
    "ingredients": [
      { "name": "Milk", "quantity": "1 liter" },
      { "name": "Sugar", "quantity": "150g" },
      { "name": "Rice", "quantity": "1/4 cup" },
      { "name": "Cardamom powder", "quantity": "1 tsp" },
      { "name": "Almonds", "quantity": "10, sliced" },
      { "name": "Cashews", "quantity": "10, chopped" },
      { "name": "Raisins", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Semolina cooked with ghee, sugar, and nuts.",
    "image": SoojiHalwa,
    "category": {
      "id": 5,
      "name": "Indian Desserts",
      "image": SoojiHalwa,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 22,
    "name": "Sooji Halwa",
    "ingredients": [
      { "name": "Semolina (Sooji)", "quantity": "1 cup" },
      { "name": "Ghee", "quantity": "1/2 cup" },
      { "name": "Sugar", "quantity": "3/4 cup" },
      { "name": "Water", "quantity": "2 cups" },
      { "name": "Cardamom powder", "quantity": "1/2 tsp" },
      { "name": "Cashews", "quantity": "10, chopped" },
      { "name": "Raisins", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Deep-fried dough balls soaked in sugar syrup flavored with rose water.",
    "image": GulabJamun,
    "category": {
      "id": 5,
      "name": "Indian Desserts",
      "image": GulabJamun,
       "isRecommendedForMealSuggestion": true
    },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 23,
    "name": "Gulab Jamun",
    "ingredients": [
      { "name": "Khoya (Mawa)", "quantity": "250g" },
      { "name": "All-purpose flour", "quantity": "2 tbsp" },
      { "name": "Baking powder", "quantity": "1/4 tsp" },
      { "name": "Milk", "quantity": "as needed to knead" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Water", "quantity": "2 cups" },
      { "name": "Rose water", "quantity": "1 tsp" },
      { "name": "Oil or ghee", "quantity": "for deep frying" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Spiced yogurt-based cucumber salad with fresh herbs.",
    "image": KheeraRaita,
    "category": {
      "id": 6,
      "name": "Indian Side Dishes",
      "image": KheeraRaita,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SAVORY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 45,
    "name": "Kheera Raita",
    "ingredients": [
      { "name": "Cucumber", "quantity": "1 medium, grated" },
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Roasted cumin powder", "quantity": "1/2 tsp" },
      { "name": "Chopped coriander leaves", "quantity": "1 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Black pepper", "quantity": "a pinch" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Tangy and spicy mixed vegetable pickle.",
    "image": AlooFry,
    "category": {
      "id": 6,
      "name": "Indian Side Dishes",
      "image": AlooFry,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SAVORY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 46,
    "name": "Mixed Vegetable Pickle",
    "ingredients": [
      { "name": "Carrot", "quantity": "1 cup, chopped" },
      { "name": "Cauliflower", "quantity": "1 cup, chopped" },
      { "name": "Green chili", "quantity": "2, chopped" },
      { "name": "Mustard seeds", "quantity": "1 tsp" },
      { "name": "Fenugreek seeds", "quantity": "1/2 tsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Mustard oil", "quantity": "1/2 cup" },
      { "name": "Turmeric powder", "quantity": "1 tsp" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Crispy fried potato cubes with Indian spices.",
    "image": vegetable_pickle,
    "category": {
      "id": 6,
      "name": "Indian Side Dishes",
      "image": vegetable_pickle,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SAVORY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 47,
    "name": "Aloo Fry",
    "ingredients": [
      { "name": "Potatoes", "quantity": "3 medium, cubed" },
      { "name": "Red chili powder", "quantity": "1 tsp" },
      { "name": "Turmeric powder", "quantity": "1/2 tsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Oil", "quantity": "for frying" },
      { "name": "Chopped coriander leaves", "quantity": "1 tbsp" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Fresh tomato and onion salad with lemon dressing.",
    "image": TomatoOnionSalad,
    "category": {
      "id": 6,
      "name": "Indian Side Dishes",
      "image": TomatoOnionSalad,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SAVORY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 48,
    "name": "Tomato Onion Salad",
    "ingredients": [
      { "name": "Tomatoes", "quantity": "2 medium, sliced" },
      { "name": "Onion", "quantity": "1 medium, sliced" },
      { "name": "Lemon juice", "quantity": "1 tbsp" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Black pepper", "quantity": "a pinch" },
      { "name": "Chopped coriander leaves", "quantity": "1 tbsp" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Lightly spiced lentil soup served as a side.",
    "image": DalTadka,
    "category": {
      "id": 6,
      "name": "Indian Side Dishes",
      "image": DalTadka,
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SAVORY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 49,
    "name": "Dal Tadka",
    "ingredients": [
      { "name": "Yellow lentils (toor dal)", "quantity": "1 cup" },
      { "name": "Water", "quantity": "3 cups" },
      { "name": "Turmeric powder", "quantity": "1/2 tsp" },
      { "name": "Ghee", "quantity": "1 tbsp" },
      { "name": "Mustard seeds", "quantity": "1 tsp" },
      { "name": "Cumin seeds", "quantity": "1 tsp" },
      { "name": "Garlic", "quantity": "2 cloves, chopped" },
      { "name": "Red chili", "quantity": "1, broken" },
      { "name": "Salt", "quantity": "to taste" },
      { "name": "Chopped coriander leaves", "quantity": "1 tbsp" }
    ]
  }
]
