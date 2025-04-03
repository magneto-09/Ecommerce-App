
---

# Ecommerce App

Welcome to the E-commerce App repository!

## Cloning the Project

To clone this project from scratch, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to clone the project.

3. Run the following command to clone the repository:
   ```
   git clone https://github.com/magneto-09/Ecommerce-App.git
   ```

4. Once the cloning process is complete, navigate into the project directory:
   ```
   cd Ecommerce-App
   ```

## Setting Up Environment Variables

Before running the project, you'll need to set up your environment variables. Follow these steps:

1. Create a new file named `.env` in the root directory of the project.

2. Add the following environment variables to the `.env` file:
   ```
   PORT=8080
   MONGODB_URI=<your_MongoDB_connection_URI>
   JWT_SECRET=<your_JWT_Secret>
   BRAINTREE_MERCHANT_ID=<your_Braintree_merchant_ID>
   BRAINTREE_PUBLIC_KEY=<your_Braintree_public_key>
   BRAINTREE_PRIVATE_KEY=<your_Braintree_private_key>
   ```

   Replace `<your_MongoDB_connection_URI>` with your MongoDB connection URI,  `<your_Braintree_merchant_ID>`, `<your_Braintree_public_key>`, and `<your_Braintree_private_key>` with your Braintree credentials.

3. Client-Side Environment Variables
   1. Navigate to the client folder of your project.
   2. Create a new file named .env in the client folder. 
   3. Open the .env file and add the following environment variable:

       ```
      REACT_APP_API=http://localhost:8080
      ```
   
## Installing Dependencies

After setting up the environment variables, you'll need to install project dependencies. Run the following command:
   ```
   npm install
   ```

## Starting the Server

Once the dependencies are installed and the environment variables are set up, you can start the server using the following command:
   ```
   npm start
   ```

## Development

For development with automatic server restarts, you can use:
   ```
   npm run server
   ```

If you have a separate client-side project, you can start it using:
   ```
   npm run client
   ```

For concurrent development (both server and client), you can run:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License.

---
