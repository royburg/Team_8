import os
from dotenv import load_dotenv
load_dotenv()

# Secret key setting from .env for Flask sessions
SECRET_KEY = os.environ.get(b'\xc9\x8cY\xb1\x94yV\xb3\xc0n\xea\xa3\x0e\xbcOf'
)

# DB base configuration from .env for modularity and security reasons
DB = {
    'host' : os.environ.get('localhost'),
    'user': os.environ.get('jdbc:mysql://localhost:3306'),
    'password': os.environ.get('root1234'),
    'database': os.environ.get('DB_G8')
}
