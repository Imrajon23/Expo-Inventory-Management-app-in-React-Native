# Mobile-app-Project- Admin Inventory Management
 
 PROJECT TITLE: Admin Grocerry/ Inventory management app.

GROUP NAME: MobileApp
 
STUDENT NAME MATRIC NO. 1. IMRAN AHMED 1527183
                        2. OSCAR STEVE 1818443
                        3. MUHAMMAD FATHUDZIKRI AULIA 1411773


INTRODUCTION 

We are developing an Application to manage inventory for superstore, grocerry, shop etc by an admin. Via this app admin of an inventory can see products available. Update product list, add product and delete also. To gain access for the inventory to check and change admin has to go through Biometric login process. In this app we use fingerprint for biometric. We will use firebase real time databse to manage the inventory. Any update or change of the inventory will change the database record immediatly. Admin will be able to add product with details like product name, Product id, Category, quantity. Admin can just simply update necessary product using simple mobile app.

PROJECT OBJECTIVE 

At the end of the project we will try to make a full functional App for admin panel to manage inventory. Admin will be able to see the product of the inventory, add products to the inventory with fixed quantity, update existing product info, remove products from the inventory. A real time database will be changed acccording to the action by the admin using this app like update, delete, add to the inventory.

Project Scope

Developing a interactive mobile application that will reduce the physical effort of inventory admin very easily. Admins don’t have to update or modify their inventory manually, They can do directly from their smartphones by installing this app.
•	User has to login by passing the biometric access in this app for their future preferences.
•	A home page containing the list of product which already existed in the database of the inventory.
•	Using this app inventory can ve updated, product can be added.
•	To remove any product from the directory admin just have to press for a longer time then a pop-up wiil come to confirm deletion.

Targeted User

Trget users of this apps are the admins' who are responsible to manage inventory records for inventory or wearhouse. Using this app they can cut off the aditional paper base record system or adding products to inventory dealing real databases. 
 
SPECIFIC PLATFORM

React Native Framework, Google firebass to setup the database, expo toolchain as emulator, LocalAuthentication Expo SDK API for biometric sign in, react-native-router-flux for routing our apps screens and simulating them, react-native-element for designing the UI. In the project we used a splash screen in the home page linked with our firebase. click on that will take you to our project database & see the data avilable in the project.

For the biometric authentication use of LocalAuthentication API from expo. This API first will check if the device is compatible to use or not using Expo.LocalAuthentication.hasHardwareAsync(). Then, Expo.LocalAuthentication.isEnrolledAsync(), it will Determine what kinds of authentications are available on the device. Then lastly it confirms solving to boolean value indicating whether the device has saved fingerprints or facial data for authentication. 
To find out more visit: https://docs.expo.io/versions/v31.0.0/sdk/local-authentication

In the authentication of biometric we used dropdownalert to show the outputs. Find out more about this library in:
https://www.npmjs.com/package/react-native-dropdownalert/v/1.6.0


Specifications

1. Clone the repository to your local computer.
2. Move into the local folder for the repository.
3. Run npm install to install all the dependencies.
4. npm install --save firebase library in project directory. 
5. npm install --save native-base.
6. react-native link, in project folder to install UI toolkit.
7. npm install --save react-native-router-flux in project directory.
8. npm i react-native-dropdownalert, install in the project folder for the output of the biometric authentication result.
9. npm i react-native-splash-screen, install to work with the splash screen.
8. Install EXPO app from play store in your mobile device. 
9. Run expo start to start the packager.


CONSTRAINTS 

As a novice developer in react native we think time and and dedication to complete this project would be our main constarint. Synchronising our apps funtions is the toughest part of our project according to our knowledge. connecting databases to our screens for data update, processing biometric access then managing the inventory, these sinchronization would be very difficult as novice react native app developer. Getting tutorial resorces, appropriate for our project apply the resources to develop our project is another challenge for us.
   
 
SUMMARY

We developing an application for the admin panel of inventory or warehouse to maintain and update there inventory information using simple mobile app. We developing this app because the world is heavily dependent and prefer mobile app nowadays to maintain there professional activities because of the technological advancement. Admin inventory management app will ease managing inventory for huge superstores like ikea, watsons etc. Using React Native and Expo we will develop our app.
