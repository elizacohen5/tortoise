# tortoise
A personal execution engine that helps you achieve your dreams 

**Backend Setup:**

# Create ai-service directory and set up Python environment
mkdir ai-service
cd ai-service
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install required packages
pip install flask flask-cors python-dotenv openai pymongo

**Start the backend**
cd ai-service
source venv/bin/activate
python3.12 app.py

---------------------------------------------------------------------------------------------------

**Frontend Setup:**

**Start the frontend**
cd app
npm run dev