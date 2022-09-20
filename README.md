//app bilding process in depth by satyam bhasin -Mindtree

1. Install Tools -git,postman,mongoose,nodejs,vscode
2. Create React App - by npx command
3. Create Git Repository online and push initial commit
4. List Products for front and backend file
5. create products array and import images in public folder
6. add product images
   render products
   style products
   Add page routing
   npm i react-router-dom
   create route for home screen
   create router for product screen
   Create Node.JS Server
   run npm init in root folder
   Update package.json set type: module
   Add .js to imports
   npm install express
   create server.js
   add start command as node backend/server.js
   require express
   create route for / return backend is ready.
   move products.js from frontend to backend
   create route for /api/products
   return products
   run npm start
   Fetch Products From Backend
   set proxy in package.json
   npm install axios
   use state hook
   use effect hook
   use reducer hook
   Manage State By Reducer Hook
   define reducer
   update fetch data
   get state from usReducer
   Add bootstrap UI Framework
   npm install react-bootstrap bootstrap
   update App.js
   Create Product and Rating Component
   create Rating component
   Create Product component
   Use Rating component in Product component
   Create Product Details Screen
   fetch product from backend
   create 3 columns for image, info and action
   Create Loading and Message Component
   create loading component
   use spinner component
   craete message component
   create utils.js to define getError fuction
   Create React Context For Add Item To Cart
   Create React Context
   define reducer
   create store provider
   implement add to cart button click handler
   Complete Add To Cart
   check exist item in the cart
   check count in stock in backend
   Create Cart Screen
   create 2 columns
   display items list
   create action column
   Complete Cart Screen
   click handler for inc/dec item
   click handler for remove item
   click handler for checkout
   Create Signin Screen
   create sign in form
   add email and password
   add signin button
   Connect To MongoDB Database
   create atlas monogodb database
   install local mongodb database
   npm install mongoose
   connect to mongodb database
   Seed Sample Products
   create Product model
   create seed route
   use route in server.js
   seed sample product
   Seed Sample Users
   create user model
   seed sample users
   Create Signin Backend API
   create signin api
   npm install jsonwebtoken
   define generateToken
   Complete Signin Screen
   handle submit action
   save token in store and local storage
   show user name in header
   Create Shipping Screen
   create form inputs
   handle save shipping address
   add checkout wizard bar
   Create Sign Up Screen
   create input forms
   handle submit
   create backend api
   Implement Select Payment Method Screen
   create input forms
   handle submit
   Create Place Order Screen
   show cart items, payment and address
   calculate order summary
   Implement Place Order Action
   handle place order action
   create order create api
   Create Order Screen
   create backend api for order/:id
   fetch order api in frontend
   show order information in 2 cloumns
   Pay Order By PayPal
   generate paypal client id
   create api to return client id
   install react-paypal-js
   use PayPalScriptProvider in index.js
   use usePayPalScriptReducer in Order Screen
   implement loadPaypalScript function
   render paypal button
   implement onApprove payment function
   create pay order api in backend
   Display Order History
   create order screen
   create order history api
   use api in the frontend
   Create Profile Screen
   get user info from context
   show user information
   create user update api
   update user info
   Publish To Heroku
   create and config node project
   serve build folder in frontend folder
   Create heroku account
   connect it to github
   Create mongodb atlas database
   Set database connection in heroku env variables
   Commit and push
   Add Sidebar and Search Box
   add sidebar
   add search box
   Create Search Screen
   show filters
   create api for searching products
   display results
   Create Admin Menu
   define protected route component
   define admin route component
   add menu for admin in header
   Create Dashboard Screen
   create dashboard ui
   implement backend api
   connect ui to backend
   Manage Products
   create products list ui
   implement backend api
   fetch data
   Create Product
   create products button
   implement backend api
   handle on click
   Create Edit Product
   create edit button
   create edit product ui
   dispaly product info in the input boxes
   Implement Update Product
   create edit product backend api
   handle update click
   Upload Product Image
   create cloudinary account
   use the api key in env file
   handle upload file
   implement backend api to upload
   Delete Product
   show delete button
   implement backend api
   handle on click
   List Orders
   create order list screen
   implement backen api
   fetch and display orders
   Deliver Order
   add deliver button
   handle click action
   implement backen api for deliver
   Delete Order
   add delete button
   handle click action
   implement backen api for delete
   List Users
   create user list screen
   implement backen api
   fetch and display users
   Edit User
   create edit button
   create edit product ui
   dispaly product info in the input boxes
   implement backend api
   handle edit click
   Delete User
   add delete button
   handle click action
   implement backen api for delete
   Choose Address On Google Map
   create google map credentials
   update .env file with Google Api Key
   create api to send google api to frontend
   create map screen
   fetch google api
   getUserLocation
   install @react-google-maps/api
   use it in shipping screen
   apply map to the checkout screen
   Email order receipt by mailgun
   create mailgun account
   add and verify your domain to mailgun
   install mailgun-js
   set api key in env file
   change pay order in orderRouter
   send email order receipt
   Review Products
   create submit review form
   handle submit
   implement backend api for review
   Upload multiple Images
   add images to product model
   get images in edit screen
   show images in product screen
