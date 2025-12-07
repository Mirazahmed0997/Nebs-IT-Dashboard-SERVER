to run the project >>>
*npm install
*npm run dev

I have hosted the backend at render 
url:https://nebs-it-dashboard-server.onrender.com
or localhost : 5000

I have done authentication with differnet role but i didn't protected the routes to see the funcionality smoothly.
*jwt, 
*google 
*sign In with google cloud, 
*file handling with multer & cloudinary

i exculedde the env file from .ignore if not works here is my env contents>>>>



PORT = 5000
DB_URL=mongodb+srv://peakRoute:peakRoute@cluster0.ljhdru4.mongodb.net/nebs-dashboard?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=Development

# JWT

jwt_access_secret=access_secret
jwt_access_expire=1d
JWT_REFRESH_SECRET= JWT_REFRESH_SECRET
JWT_EXPIRE_SECRET=30d
# bcrypt
BCRYPT_SALT_ROUND=10


# super Admin Email
SUPER_ADMIN_EMAIL=super@gmail.com
SUPER_ADMIN_PASSWORD=12345678


# google
GOOGLE_CLIENT_SECRET=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
GOOGLE_CLIENT_ID=196505035669-oevbk366gd8atfn90frhkcm0ce2p2u8e.apps.googleusercontent.com
GOOGLE_CALLBACK_URL=http://localhost:5000/api/v1/auth/google/callback

# express
EXPRESS_SESSION_SECRET=express-sesson

# Frontend URL
FRONTEND_URL=http://localhost:5173

# cloudinary

CLOUDINARY_CLOUD_NAME=duaatrvke
CLOUDINARY_API_KEY=674323776814264
CLOUDINARY_API_SECRET=N_5AKQLEclBhehQxw3wpRECudAo







