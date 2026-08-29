import asyncpg
from fastapi import FastAPI, Depends, HTTPException
from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Database connection function
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",         # Change to your DB username
        password="password", # Change to your DB password
        database="testdb"    # Change to your DB name
    )

@app.route('/save', methods=['POST'])
def save_data():
    try:
        data = request.get_json()

        # Extract and validate inputs
        name = data.get("name", "").strip()
        location = data.get("location", "").strip()

        if not name or not location:
            return jsonify({"error": "Both name and location are required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        # Insert into table securely
        cursor.execute(
            "INSERT INTO my_table (name, location) VALUES (%s, %s)",
            (name, location)
        )
        conn.commit()

        return jsonify({
            "message": "Data saved successfully",
            "id": cursor.lastrowid
        })

    except Error as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals() and conn.is_connected():
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)

DATABASE_URL = "postgresql://neondb_owner:npg_OA5TjNC7qrhB@ep-winter-moon-aeyt3u1n-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

pool: asyncpg.Pool | None = None

async def connect_db():
    global pool
    if pool is None:
        pool = await asyncpg.create_pool(
            DATABASE_URL,
            min_size=1,
            max_size=5,
            statement_cache_size=0,
            command_timeout=60
        )

async def disconnect_db():
    global pool
    if pool:
        await pool.close()
        pool = None

async def get_db():
    if pool is None:
        raise HTTPException(status_code=500, detail="Database pool not initialized")
   
    async with pool.acquire() as connection:
        async with connection.transaction():
            yield connection

@router.post("/add")

def add_user_to_db(name,location,interest)
    connection = psycopg.connect("your_neon_connection_string_here")
    cursor = connection.cursor()
    sql_query = "INSERT INTO users (name,location,interest) "
    
    user_data = (name,location,interest)
    
    try:
        cursor.execute(sql_query, user_data)
        connection.commit()
        print(f"Successfully added user: {name}")
    except Exception as e:
        print(f"Error saving to database: {e}")
        connection.rollback() 
        finally:
        connection.close()


    