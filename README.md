# Book Shop Server
Developed an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Book Store.

Live link: [text](https://ph-assignment-2-basic-mongoose.vercel.app/)

### Key Features
- Add new Book with details like title, author, price, category, description, quantity, and stock 
- View details of specific Book by its ID
- Update Book information such as price ,stock status,quantity,etc
- Delete a Book from the inventory its normal delete
- place order for Book with email,product ,quantity,and total price .
- Validate stock availability before creation
- Automatically reduce inventory when an order is placed its dynamic
- When a Book out of stock its reaches a zero and its stock status is false
- update Book inventory Dynamicaly
- through proper error message

### Techonology used
  1. Backend : Node.js,Express.js,TypeScript, Zod
  2. DataBase: MongoDB and Mongoose 
  3. Tools: EsLint,Prettieer

### Check API end point 

#### Book
Post a Book: (post method) https://ph-assignment-2-basic-mongoose.vercel.app/api/products
Get All Books: (get method) https://ph-assignment-2-basic-mongoose.vercel.app/api/products
Get A Single Book: (get method) https://ph-assignment-2-basic-mongoose.vercel.app/api/products/(book id)
Update A Book Data: (put method) https://ph-assignment-2-basic-mongoose.vercel.app/api/products/(book id)
Delete A Book: (delete method) https://ph-assignment-2-basic-mongoose.vercel.app/api/products/(book id)
Search Books: (get method) https://ph-assignment-2-basic-mongoose.vercel.app/api/products/products?searchTerm=(text)

#### Order
Order a Book: (post method) https://ph-assignment-2-basic-mongoose.vercel.app/api/orders
Get All Order: (get method) https://ph-assignment-2-basic-mongoose.vercel.app/api/orders
Get Total Revenue: (get method) https://ph-assignment-2-basic-mongoose.vercel.app/api/orders/revenue