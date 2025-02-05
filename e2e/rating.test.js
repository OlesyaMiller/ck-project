import { test, expect } from '@playwright/test';

test('all 5 gray stars are visible by default', async ({ page }) => { 
  
  await page.goto('/'); 

  const stars = await page.$$('[class*="star"]');

  await expect(stars).toHaveLength(15); 

  for (let i = 0; i < 5; i++) { 

    const star = stars[i]; 

    const classAttribute = await star.getAttribute('class'); 

    expect(classAttribute).toContain('text-gray-400'); 

  } 

});

test('clicking a star locks the rating and prevents further changes', async ({ page }) => {

  await page.goto('/');

  const stars = await page.$$('[class*="star"]');

  await expect(stars).toHaveLength(15); 

  // Hover over the 3rd star (index 2).
  await stars[2].hover();

  // Verify that stars 1-3 have the yellow class and stars 4-5 have the gray class.
  for (let i = 0; i < 5; i++) {

    const starClass = await stars[i].getAttribute('class');

    if (i < 3) {

      expect(starClass).toContain('text-yellow-500');

    } else {

      expect(starClass).toContain('text-gray-400');

    }
  }

  // Click the 3rd star (index 2) to set the rating to 3.
  await stars[2].click();

  // Verify that stars 1-3 have the yellow class and stars 4-5 have the gray class.
  for (let i = 0; i < 5; i++) {

    const starClass = await stars[i].getAttribute('class');

    if (i < 3) {

      expect(starClass).toContain('text-yellow-500');

    } else {

      expect(starClass).toContain('text-gray-400');

    }
  }

  // Attempt to click on the 5th star.
  await stars[4].click();

  // Verify again that the rating remains locked at 3.
  for (let i = 0; i < 5; i++) {

    const starClass = await stars[i].getAttribute('class');

    if (i < 3) {

      expect(starClass).toContain('text-yellow-500');

    } else {

      expect(starClass).toContain('text-gray-400');

    }
  }

  // const ratingOutput = await page.$$('[class*="rating"]');
  // console.log('rating output',ratingOutput);
  // // Verify that the output element displays the correct rating ("4"). 
  // await expect(ratingOutput[0]).to.toContain('5');

});

