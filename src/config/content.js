// Header for Main header
export const headerContent = {
    logo: {
        src: "/assets/image/logo.png",
        alt: "Vitenplate Logo"
    },
    navLinks: [
        { name: "Home", href: "/" },
        { name: "Try", href: "/try" },
        { name: "About", href: "/about" },
        { name: "Pricing", href: "/pricing" }
    ],
    buttons: {
        login: {
            text: "Login",
            href: "/login",
            type: "link"
        },
        signup: {
            text: "Sign Up",
            href: "/signup",
            type: "gradient"
        }
    }
};

//Header for only login page header
export const headerLogin = {
    logo: {
        src: "/assets/image/logo.png",
        alt: "Vitenplate Logo"
    },
    navLinks: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
    ],
    buttons: {
        login: {
            text: "Login",
            href: "/login",
            type: "link"
        },
        signup: {
            text: "Sign Up",
            href: "/signup",
            type: "gradient"
        }
    }
};


// Header for footer
const content = {
    footer: {
        company: {
            logo: 'Company Logo',
            quote: 'Healthy Food',
            links: ['About Us', 'Contact Us', 'Careers', 'Blog', 'Culture']
        },
        product: {
            features: [
                'Feature 1',
                'Feature 2',
                'Feature 3',
                'Feature 4',
                'Feature 5'
            ]
        },
        support: {
            features: [
                'Feature A',
                'Feature B',
                'Feature C',
                'Feature D',
                'Feature E'
            ]
        },
        contact: {
            info: '1234 Main Street, City, Country'
        }
    }
};
export default content;
  
// For login form
  export const loginContent = {
    title: 'Welcome to Vitalplate',
    emailPlaceholder: 'Enter your Email',
    passwordPlaceholder: 'Enter your Password',
    signUpButton: 'Sign up',
    illustration: '/assets/image/doctor_Illustration.png',
  }; 

// src/config/content.js

export const historyFormConfig = {
    personalInformation: [
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Age', type: 'number', name: 'age' },
        { label: 'Gender', type: 'select', name: 'gender', options: ['Male', 'Female', 'Other'] },
        { label: 'Height', type: 'number', name: 'height' },
        { label: 'Weight', type: 'number', name: 'weight' },
        { label: 'Occupation', type: 'text', name: 'occupation' },
        { label: 'Involved in any Exercise or Sport', type: 'text', name: 'exercise' },
    ],
    medicalHistory: [
        { label: 'Any existing medical conditions', type: 'textarea', name: 'medicalConditions' },
        { label: 'Past surgeries or treatments', type: 'textarea', name: 'surgeries' },
        { label: 'Allergies or food intolerances', type: 'textarea', name: 'allergies' },
        { label: 'Current Meal Time in day', type: 'text', name: 'mealTime' },
        { label: 'Preference for specific cuisines or ingredients', type: 'text', name: 'cuisinePreferences' },
        { label: 'Consumption of snacks, sweets, and beverages', type: 'text', name: 'consumption' },
    ],
    lifestyleFactors: [
        { label: 'Physical activity level', type: 'text', name: 'activityLevel' },
        { label: 'Sleep patterns', type: 'text', name: 'sleepPatterns' },
        { label: 'Smoking or alcohol consumption', type: 'text', name: 'smokingAlcohol' },
    ],
    goalsPreferences: [
        { label: 'Specific health goals', type: 'text', name: 'healthGoals' },
        { label: 'Dietary preferences or restrictions', type: 'text', name: 'dietaryPreferences' },
        { label: 'Short-term and long-term dietary goals', type: 'text', name: 'dietaryGoals' },
    ],
    psychosocialFactors: [
        { label: 'Emotional relationship with food', type: 'textarea', name: 'emotionalRelationship' },
        { label: 'Social and cultural influences on food choices', type: 'textarea', name: 'socialCulturalInfluences' },
    ],
};

// src/config/content.js

export const nutrientFormConfig = {
    macronutrients: [
        { name: 'carbohydrates', label: 'Carbohydrates' },
        { name: 'proteins', label: 'Proteins' },
        { name: 'fats', label: 'Fats' },
        { name: 'fiber', label: 'Fiber' },
        { name: 'water', label: 'Water' },
    ],
    micronutrients: [
        { name: 'vitaminA', label: 'Vitamins A' },
        { name: 'vitaminB', label: 'Vitamins B (all types)' },
        { name: 'vitaminC', label: 'Vitamin C' },
        { name: 'vitaminD', label: 'Vitamin D' },
        { name: 'vitaminE', label: 'Vitamin E' },
        { name: 'vitaminK', label: 'Vitamin K' },
        { name: 'calcium', label: 'Calcium' },
        { name: 'iron', label: 'Iron' },
        { name: 'magnesium', label: 'Magnesium' },
        { name: 'potassium', label: 'Potassium' },
        { name: 'sodium', label: 'Sodium' },
        { name: 'zinc', label: 'Zinc' },
    ],
};
