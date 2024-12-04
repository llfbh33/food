# food
Recipes, macro/micro nutrients

Testing that we are properly connected to git


- User
    - Name
    - User Name
    - Email
    - Age
    - Male or female
    - Exercize level
    - Password

    female      |  Sedentary   |   Moderately Active  |   Active
    18 - 30     |    2,000     |      2,000 - 2,200   |   2,400
    31 - 50     |    1,800     |         2,000        |   2,200
    50+         |    1,600     |         1800         |   2000 - 2200

    male        |  Sedentary   |   Moderately Active  |   Active
    18 - 30     |    2,400     |      2,600 - 2,800   |   3,000
    31 - 50     |    2,200     |      2,400 - 2,600   |   2,800 - 3,000
    50+         |    2,000     |      2,200 - 2,400   |   2,400 - 2,800

// should be calculated based off the nutritional facts of the foods added to that day.
    a daily should actually not hold any of the values of the nutrients but instead just hold an array of the food id's which have been used / eatten in that day, which could be separated by breakfast / lunch / dinner / snack
    - though not just an array of id's  because we also need to set serving sizes.  save the id's as an object within an array?

- Daily Nutrition - number values       m   |   f
    - Vitamin A                     900 mcg | 700 mcg
    - Vitamin E                     15 mg   | 15 mg
    - Vitamin D                     600 IU  | 600 IU
    - Vitamin C                     90 mg   | 75 mg
    - Thiamine                      1.2 mg  | 1.1 mg
    - Riboflavin                    1.3 mg  | 1.1 mg
    - Niacin                        16 mg   | 14 mg
    - Vitamin B-6                   1.3 mg  | 1.1 mg
    - Vitamin B-12                  2.4 mcg | 2.4 mcg
    - Choline                       550 mg  | 425 mg
    - Vitamin K                     120 mcg | 90 mcg
    - Folate / folic acid           400 mcg | 400 mcg

    - Calcium                       1000 mg | 1000 mg
    - Iron                          8 mg    | 18 mg
    - Magnesium                  400-420 mg | 310 - 320 mg
    - Phosphorous                   700 mg  | 700 mg
    - Potassium                     4700 mg | 4700 mg
    - Sodium                        2300 mg | 230 mg
    - Zinc                          11 mg   | 8 mg
    - Copper                        900 mcg | 900 mcg
    - Maganese                      2.3 mg  | 1.8 mg
    - Selenium                      55 mcg  | 55 mcg
    - Calories                      Based on activity level

    Calculate the calories and vitamin / mineral levels based off provided information
    Save the exercise level to the user, calculate calories based on that.  DO NOT state levels for losing weight.
    Add a disclaimer for the fact you are not a nutritionist or doctor of any kind


- Look into finding an api with either calorie king or another site to pull in predetermined nutrition facts for food.  Do not want to have to completly create your own food database.

- Food
    - userId
    - name
    -
