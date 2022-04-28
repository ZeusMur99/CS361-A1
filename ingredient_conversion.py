# Name: Jesus Murillo
# Program: MVP Implementation
# Description:

def cubic_cm_to_tbsp(cubic_cm):
    return cubic_cm / 14.7868

def cubic_cm_to_cup(cubic_cm):
    return cubic_cm / 240

def flour_to_volume(mass):
    return float(mass) / 0.59

def water_to_volume(mass):
    return float(mass)

def yeast_to_volume(mass):
    return float(mass) / 1.4

def salt_to_volume(mass):
    return float(mass) / 2.17

if __name__ == "__main__":
    print("Welcome to the program!")
    print("Here we help convert grams to cups/tbsp.")

    print("\nNew features:")
    print("This program is now able to convert to both Tbsp and cups. This allows the user "
          "to choose whichever new metric might be most useful for them.")


    print("\nThis program will convert the following products:")
    print("\t(1) Flour")
    print("\t(2) Water")
    print("\t(3) Yeast")
    print("\t(4) Salt")

    print("\nTo see how the conversion are done, enter 'Y'. Enter any other "
          "button to continue.")

    explanation_required = input()

    if explanation_required.strip().capitalize() == 'Y':
        print("\nThe average density of flour is 0.59g/ccm.")
        print("The average density of water is 1g/ccm.")
        print("The average density of yeast is 1.4g/ccm.")
        print("The average density of salt is 2.17g/ccm.")
        print("\n In order to convert from a unit of mass to one of volume, the entered "
              "mass in grams is divided by its density, resulting in its volume (ccm).")
        print("From there the conversion is made to the specified unit:")
        print("\t1 Tbsp = 14.7869 ccm")
        print("\t1 cup = 240 ccm")

    print("\nWould you like to begin conversions?")
    run_program = input("Enter 'Y' for yes, anything else to exit: ")

    if run_program.strip().capitalize() == 'Y':
        while True:
            print("\nWhen prompted, enter the values in grams.")
            print("Calculations will be returned after all values have been entered.")
            flour_mass = input("\n\tFlour: ")
            water_mass = input("\tWater: ")
            yeast_mass = input("\tYeast: ")
            salt_mass = input("\tSalt: ")

            print("\nWould you like values coverted to Tbsp or to cups?")
            print("Heads up: New unit cannot be changed until after conversions have been completed.")
            conversion = input("Enter '1' for Tbsp and '2' for cups: ")

            print("\nCalculating...\n")

            if conversion.strip() == '1':
                print("\tFlour: " +
                      str(round(cubic_cm_to_tbsp(flour_to_volume(flour_mass)),2)) +
                      " Tbsp")
                print("\tWater: " +
                      str(round(cubic_cm_to_tbsp(water_to_volume(water_mass)),2)) +
                      " Tbsp")
                print("\tYeast: " +
                      str(round(cubic_cm_to_tbsp(yeast_to_volume(yeast_mass)),2)) +
                      " Tbsp")
                print("\tSalt: " +
                      str(round(cubic_cm_to_tbsp(salt_to_volume(salt_mass)),2)) +
                      " Tbsp")

            else:
                print("\tFlour: " +
                      str(round(cubic_cm_to_cup(flour_to_volume(flour_mass)), 3)) +
                      " cups")
                print("\tWater: " +
                      str(round(cubic_cm_to_cup(water_to_volume(water_mass)), 3)) +
                      " cups")
                print("\tYeast: " +
                      str(round(cubic_cm_to_cup(yeast_to_volume(yeast_mass)), 3)) +
                      " cups")
                print("\tSalt: " +
                      str(round(cubic_cm_to_cup(salt_to_volume(salt_mass)), 3)) +
                      " cups")

            print("\nWould you like to run it again?")
            rerun = input("Enter 'Y' to run again. Enter anything else to quit: ")
            if rerun.strip().capitalize() != 'Y':
                confirm = input("Are you sure? ('Y' to confirm)")
                if confirm.strip().capitalize() == 'Y':
                    break

    print("\nThank you for using this program. We hope to see you again!")