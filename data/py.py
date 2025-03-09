import aiohttp
import asyncio
from bs4 import BeautifulSoup

# List of URLs
urls = [
    'https://www.ambicatech.in/plastic-containers.html',
    'https://www.ambicatech.in/plastic-soap-dish-and-stand.html',
    'https://www.ambicatech.in/plastic-bowl.html',
    'https://www.ambicatech.in/plastic-strainer.html',
    'https://www.ambicatech.in/plastic-basket.html',
    'https://www.ambicatech.in/plastic-jars.html',
    'https://www.ambicatech.in/plastic-food-containers.html',
    'https://www.ambicatech.in/plastic-plate.html',
    'https://www.ambicatech.in/plastic-glass.html',
    'https://www.ambicatech.in/plastic-cup.html',
    'https://www.ambicatech.in/plastic-lunch-box.html',
    'https://www.ambicatech.in/plastic-bath-mug.html',
    'https://www.ambicatech.in/plastic-bowls.html',
    'https://www.ambicatech.in/kitchen-wiper.html',
    'https://www.ambicatech.in/plastic-fridge-bottle.html',
    'https://www.ambicatech.in/plastic-masala-box.html',
    'https://www.ambicatech.in/jug-set.html',
    'https://www.ambicatech.in/plastic-jar.html',
    'https://www.ambicatech.in/plastic-ice-tray.html',
    'https://www.ambicatech.in/plastic-dust-pan.html',
    'https://www.ambicatech.in/plastic-bottle.html',
    'https://www.ambicatech.in/water-bottle.html',
    'https://www.ambicatech.in/soap-dish.html',
    'https://www.ambicatech.in/mugs.html',
    'https://www.ambicatech.in/plastic-scratcher-stick.html',
    'https://www.ambicatech.in/plastic-dish.html',
    'https://www.ambicatech.in/flour-strainer.html',
    'https://www.ambicatech.in/plastic-water-strainers.html',
    'https://www.ambicatech.in/sauce-bottle.html',
    'https://www.ambicatech.in/plastic-salt-paper.html',
    'https://www.ambicatech.in/plastic-pen-holder.html',
    'https://www.ambicatech.in/plastic-baby-sipper-bottle.html',
    'https://www.ambicatech.in/plastic-serving-spoon.html'
]

async def fetch(session, url):
    """Fetch the URL and return the parsed text from specified classes."""
    try:
        async with session.get(url) as response:
            html = await response.text()
            soup = BeautifulSoup(html, 'html.parser')
            
            # Extract text from the given classes
            content_texts = [elem.get_text(strip=True) for elem in soup.find_all(class_="cont9 bx2 w1 txt2")]
            header_texts = [elem.get_text(strip=True) for elem in soup.find_all('h1', class_="clr11 fnt1 m25 fnt17 bo1")]
            
            return {"url": url, "header": header_texts, "content": content_texts}
    except Exception as e:
        return {"url": url, "error": str(e)}

async def main():
    """Run all requests concurrently."""
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        
        for result in results:
            print(f"URL: {result['url']}")
            if 'error' in result:
                print(f"Error: {result['error']}")
            else:
                print(f"Header: {result['header']}")
                print(f"Content: {result['content']}")
            print("-" * 80)

# Run the async function
if __name__ == "__main__":
    asyncio.run(main())

