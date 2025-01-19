import {test,expect} from '@playwright/test';
import { count } from 'console';

test('Iteration over elements',async({ page })=>{
    await  page.goto('https://github.com/BakkappaN');

    //forof Loop
    const repositortyLinks = await page.$$('.repo')
    for(const link of repositortyLinks){
        const text = await link.textContent();
        console.log(`repos name: ${text}`);
    }

    //forLoop
    for(let i=0; i<repositortyLinks.length; i++){
        const text = await repositortyLinks[i].textContent();
        console.log(`repos name from second loop: ${text}`);
    }
     
    //for Loop using nth() method
    const repositoryLinks2 = page.locator('.repo');
    const count = await repositoryLinks2.count();
    for(let i=0; i<count; i++){
        const text = await repositoryLinks2.nth(i).textContent()


    }

})