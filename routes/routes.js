var uuid = require('uuid');

var appRouter = app => {
  app.get("/desserts", (req, res) => {
    console.log('COOKIES', req.cookies);

    const data = [
      { id: uuid(), name: 'Peanut Butter Cookie', ingredients: 'Peanut Butter, Peanuts', type: 'cookie' },
      { id: uuid(), name: 'Chocolate Chip Cookie', ingredients: 'Dark Chocolate Chips, White Chocolate Chips', type: 'cookie' },
      { id: uuid(), name: 'Red Velvet Cupcake', ingredients: 'Cream Cheese Frosting, Pure Vanilla Extract, Red Food Coloring', type: 'cupcake' },
      { id: uuid(), name: 'Classic Cheesecake', ingredients: 'Full-fat Cream Cheese, Full-fat Sour Cream, Fresh Lemon Juice', type: 'cheesecake' },
      { id: uuid(), name: 'Chocolate Peppermint Cheesecake', ingredients: 'Cream Cheese, Chopped Candy Canes, White Chocolate', type: 'cheesecake' }
    ];

    let customData = data;
    const { personalPreference } = req.cookies;
    if (personalPreference) {
      customData = customData.filter(val => val.type === personalPreference);
    }

    res.status(200).send(customData);
  });
}

module.exports = appRouter;