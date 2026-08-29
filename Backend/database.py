import json
# Reading a JavaScript file
with open('PerfectDay.js', 'r') as js_file:
   content = js_file.read()
# Print or process the content
print(content)

try:
    with open("data.json", "r") as file:
        data = json.load(file)
    print("File data =", data)
except json.JSONDecodeError:
    print("Error: Failed to decode JSON from the file.")

