# Getting Started with Blog-Site `by- Syed Faizan Ali`


See the section about [deployment - PART]() .

### To start the server use - `npm start` for both client & server side
**Note: Do- [cd client] in terminal, Do- [cd server] in terminal then `npm start` !**

Packages Using -
## Back-end [http://localhost:4000]
1) express
2) nodemon
3) mongoose
4) multer
5) body-parser
6) aws-sdk

## Front-end Default [http://localhost:3000]
1) react-router-dom
2) axios
3) @material-ui/icons
4) @material-ui/core
5) @emotion/styled


## FEATURE I - User
### Models
- Blog Model
```yaml
{ 
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String
    },
  createdAt: {timestamp},
  updatedAt: {timestamp}
}
```
## User APIs 
### POST /postBlog
- Creating post from request body.
- uploading image to S3 bucket and saving it as URL in mongoDB

## User APIs 
### GET /getBlog
 - Getting all blogs in homepage in reverse chronological order by the use of created at 
 [const getBlog = await blogModel.find().sort({ 'createdAt': -1 })]()
- 

