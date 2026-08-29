import json
import asyncpg
from fastapi import APIrouter, Depends, HTTPException

router = APIrouter(prefix="/interests", tags=["interests"])

@router.get("/interests")

async def getInterests(
    
)

# Reading a JavaScript file
with open('PerfectDay.json', 'r') as js_file:
   content = js_file.read()

with open('PerfectDay.json', 'a') as file:

try:
    with open("data.json", "r") as file:
        data = json.load(file)
    print("File data =", data)
except json.JSONDecodeError:
    print("Error: Failed to decode JSON from the file.")

