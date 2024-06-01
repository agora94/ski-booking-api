import requests
from bs4 import BeautifulSoup
import json


host = "https://en.wikipedia.org"
resorts_list_url = f'{host}/wiki/List_of_ski_areas_and_resorts_in_the_United_States'
response = requests.get(resorts_list_url)
soup = BeautifulSoup(response.content, 'html.parser')

resorts = []

sections = soup.find_all('ul')
for section in sections:
    for li in section.find_all('li'):
        resort_name = li.get_text().split(' — ')[0]
        link = li.find('a')
        url = link.get('href') if link else 'TODO'
        if resort_name:
            resorts.append({'name': resort_name, 'url': url, 'location': '', 'description': '', 'longitude': 0, 'latitude': 0})

resorts = resorts[126:592]
for i, resort in enumerate(resorts):
    if(resort['url'] == 'TODO'):
        continue
    print('resort: ', resort['name'])
    url = f"{host}{resort['url']}" if 'Timberline' not in resort['name'] else f"{host}/wiki/Timberline_Lodge_ski_area"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    infobox = soup.find('table', class_='infobox')
    location = infobox.find('td', class_='infobox-data label') if infobox else None
    geodec = infobox.find('span', class_='geo-dec') if infobox else None
    if geodec is not None:
        [latitude, longitude] = geodec.get_text().split(' ')
    resort['location'] = location.get_text() if location else 'TODO'
    resort['latitude'] = latitude[0:len(latitude)-2] if latitude else 0
    resort['longitude'] = longitude[0:len(longitude)-2] if longitude else 0
    del resort['url']
    resorts[i] = resort

# Save to JSON file
with open('ski_resorts.json', 'w') as f:
    json.dump(resorts, f, indent=4)