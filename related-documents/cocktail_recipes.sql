-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2018 at 04:50 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id3940083_moneymaker`
--

-- --------------------------------------------------------

--
-- Table structure for table `cocktail_recipes`
--

CREATE TABLE `cocktail_recipes` (
  `cr_id` int(11) NOT NULL,
  `cr_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `cr_liqureType` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `cr_description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `cr_ingredients` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `cr_garnishes` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `cr_speciallyFor` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `cr_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cocktail_recipes`
--

INSERT INTO `cocktail_recipes` (`cr_id`, `cr_name`, `cr_liqureType`, `cr_description`, `cr_ingredients`, `cr_garnishes`, `cr_speciallyFor`, `cr_likes`) VALUES
(1, 'Soleil', 'Arrack', 'Fill a shaker with ice, and add Arrack, Lime Juice, Passion fruit juice, and shake well. Double strain into a chilled martini glass and add a dash of Angostura Bitters and serve.', '50 ml Arrack, 50ml Passion fruit juice, 15ml Limejuice, Dash of Angostura Bitters', '', 'Ceylon Arrack', 2),
(2, 'Sri Lanka Sunrise - Old Reserve Cocktail', 'Arrack', 'Shake all ingredients together. Strain into a cocktail glass. Top up with Soda.', '25ml Old Reserve, 25ml Passion Fruit, juice/cordial, 10ml Lime juice/Lemon juice, 1/2 tsp. crushed lemon grass, 40ml Soda, Ice Cubes', 'Stick of Lemon Grass, Lime, Lemon wed, and Frangipani flower.', 'Old Reserve', 23),
(3, 'Sherman', 'Arrack, Vodka', 'Shake Chambord, Vodka and Arrack over ice and strain into a shooter glass. Layer double cream on top and place a raspberry carefully in the middle. Drink as a shot with raspberry as final treat.', 'Dash of Arrack, Dash of Vodka, Dash of Chambord, Double cream', '', 'Ceylon Arrack, Vodka', 6),
(4, 'Midnight', 'Arrack', 'Shake Arrack, and Tia Maria in an ice filled shaker. Strain into a Rock\'s glass full of ice and top up with Coca Cola. Garnish with Maraschino Cherry.', '25ml Arrack, 25ml Tia Maria, Coca Cola', 'Maraschino Cherry', 'Ceylon Arrack', 0),
(5, 'Javaberry', 'Arrack', 'Crush fresh raspberries with demerera sugar in shaker. Add ice, Arrack, Coffee liquor and raspberry vodka and shake vigorously. Strain into a margarita glass and place a thin layer of double cream on the top.', '25ml Arrack, 25ml Coffee liquor, 25ml Raspberry vodka, 6 fresh raspberries, 1 tsp Demerera sugar, Double cream', '', 'Ceylon Arrack', 0),
(6, 'Sour Cherry', 'Arrack', 'Prepare rim of glass with a mix of sugar and salt. Crush cherries with Amaretto at the bottom of the cocktail shaker before adding ice and the rest of the ingredients. Shake well. Pour into the rock\'s glass and stir before serving. ', '35ml Arrack, 25ml Amaretto Dissaranno, 25ml limejuice, 3 Maraschino Cherries, Dash of gomme, 3 dashes of Angostura Bitters, sugar and salt', 'Cherry', 'Ceylon Arrack', 0),
(7, 'Ceylon Lemonade', 'Arrack', 'Squeeze and drop lemon wedges into a sling glass full of ice. Add Arrack and stir well. Top up with Lemonade and serve immediately.', '50ml Arrack, 6 wedges of lemons, Lemonade ', 'Lemon slices', 'Ceylon Arrack', 0),
(8, 'Strawberry Siren', 'Arrack', 'Blend all ingredients with ice and pour into a tall glass. Garnish with a half a strawberry.', '50ml Arrack, 25ml Limejuice, 6 Fresh strawberries, 25 ml strawberry Monin, Dash of gomme', 'Strawberry', 'Ceylon Arrack', 0),
(9, 'Sailor\'s Ice Tea', 'Arrack, Rum', 'Fill large cocktail glass with ice, and add Coca Cola till glass is half full. Add rest of ingredients in an ice filled shaker and shake well. Slowly pour the mixture into the glass, layering it on the Coca Cola. Garnish with a wedge of lime.', '50ml Arrack, 25ml White rum, 25ml Cointreau, 25ml gin, Dash of lime, Dash of gomme, Coca Cola', 'Lime slices', 'Ceylon Arrack, Rockland White Rum ', 0),
(10, 'Colonial Caipirissma', 'Arrack', 'Muddle raspberries with sugar and lime in the glass. Pour in Arrack and Bacardi 8yr old. Fill with crushed ice and muddle with bar spoon. Top up with more crushed ice and serve.', '25ml Arrack, 25ml Bacardi 8yr old, 6 wedges of lime, 6 fresh raspberries, 1 tsp demerera Sugar', '', 'Ceylon Arrack, Bacardi', 0),
(11, 'Mojito', 'Rum', 'Crush all ingredients in an old fashioned glass. Fill the glass with ice cubes and top up with soda water.', '50ml White Rum, 30ml Gomme Syrup, 1 tbsp Brown Sugar, Mint leaves, Bottle of Soda water', 'Lemon slices', 'Rockland White Rum', 0),
(12, 'Mai Tai', 'Rum', 'Combine all of the ingredients in shaker with ice, strain into a old fashioned style glass. Garnish with a slice of pineapple, lime wheel and a Maraschino cherry.', '30ml White Rum, 20ml Dark Red Rum, 15ml Giffard Orange Syrup, 15ml Giffard Orgeat Syrup, 10ml Lime Juice, 15ml Orange Juice', 'Slice of pineapple, lime wheel and a Maraschino cherry.', 'Rockland White Rum, Rockland Red Rum', 0),
(13, 'Pina Colada', 'Rum', 'Blend all ingredients with a few ice cubes until smooth. Pour into chilled glass, garnish with pineapple slice and serve.', '30ml White Rum, 30ml Cream of Coconut, 90ml Pineapple Juice', 'Pineapple slice', 'Rockland White Rum', 0),
(14, 'Hurricane', 'Rum', 'Shake all ingredients with ice, strain over fresh ice.\r\nShake all ingredients in a cocktail shaker with ice and strain into a hurricane glass filled with ice. Garnish with a cherry and an orange slice.', '30ml White Rum, 30ml Dark Red Rum, 40ml Passion Fruit Juice, 20ml Orange Juice, 10ml Lime Juice, 1 tbsp Gomme Syrup, 1 tbsp Giffard Grenadine', 'Cherry and an orange slice.', 'Rockland White Rum, Rockland Red Rum', 0),
(15, 'Strawberry Daiquiri', 'Rum', 'Add ingredients with a bit of ice in a blender. Blend and then strain into a cocktail glass. Garnish with strawberry.', '45ml White Rum, 20ml Lime Juice, 5ml Wenneker Strawberry Liqueur, 4-5 strawberries', 'Strawberry', 'Rockland White Rum', 0),
(16, 'Negroni', 'Gin', 'Add all ingredients into glass over ice. Stir. Garnish and serve.', '30ml Dry Gin, 30ml sweet Red Vermouth, 30 ml Campari', 'Lemon slices', 'Rockland Dry Gin', 0),
(17, 'Dry Martitni', 'Gin', 'Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink and garnish with olive.', '55ml Dry Gin, 15ml Dry Vermouth', 'Olive', 'Rockland Dry Gin', 0),
(18, 'Tom Collins', 'Gin', 'Fill the glass with ice cubes, pour all ingredients and top up with the soda water.', '50ml Dry Gin, 20ml Lime Juice, 20ml Giffard Orgeat Syrup, Soda Water', 'Lemon slices', 'Rockland Dry Gin', 0),
(19, 'Pink Lady', 'Gin', 'Shake ingredients well with ice and strain into cocktail glass. Garnish with a cherry.', '45ml Dry Gin, 4 Dashes of Giffard Grenadine, 1 Egg White', 'Cherry', 'Rockland Dry Gin', 0),
(20, 'Long Island Iced Tea', 'Gin, Vodka, Rum', 'Pour all ingredients into a highball glass over ice. Add a dash of fresh lime juice, top up with coca cola and stir well before served.', '15ml Dry Gin, 15ml Vodka, 15ml White Rum, 15ml Tequila, 15ml Wenneker Triple Sec, Dash of Lime Juice, Coca-cola', '', 'Rockland Dry Gin, Keruv Vodka, Rockland White Rum, Tequila', 0),
(21, 'Cosmopolitan', 'Vodka', 'Shake all ingredients in a cocktail shaker and serve in a Martini Glass.', '50ml Vodka, 25ml Cointreau, 60ml Cranberry Juice', '', 'Keruv Vodka', 0),
(22, 'Screw Driver', 'Vodka', 'Mix in a highball glass with ice. Garnish with orange-wheel and serve.', '50ml Vodka, 100ml Orange Juice', 'Orange-wheel', 'Keruv Vodka', 0),
(23, 'Bloody Mary', 'Vodka', 'Add all ingredients into mixing glass. Add pinch of salt and pepper. Pour back and forth between two mixing glasses. Strain into an ice-filled highball glass. Garnish with celery stick.', '40ml Vodka, 90ml Tomato Juice, 15ml Lime Juice, Dash Worcestershire Sauce, Dash Tabasco Sauce, Salt and Pepper', 'Celery stick and lemon-wheel', 'Keruv Vodka', 0),
(24, 'Sex on the Beach', 'Vodka', 'Shaken with ice and poured into a highball glass.', '30ml Vodka, 20ml Wenneker Peach Liqueur, 60ml Cranberry Juice, 60ml Orange Juice', '', 'Keruv Vodka', 0),
(25, 'Black Russian', 'Vodka', 'Pour the ingredients into the old fashioned glass filled with ice cubes. Stir gently.', '50ml Vodka, 20ml Coffee Liqueur/Kahlua', '', 'Keruv Vodka', 0),
(26, 'Whisky Sour', 'Whisky', 'Shake with ice. Strain into ice-filled old-fashioned glass to serve on the rocks.', '45ml Whisky, 30ml Lime Juice, 15ml Gomme Syrup, Dash egg white (optional)', '', 'Old Keg Whisky', 0),
(27, 'Manhattan', 'Whisky', 'Stir over ice. Strain into chilled glass. Garnish and serve straight up.', '50ml Whisky, 20ml Sweet Red Vermouth, Dash of Angostura Bitters, Maraschino Cherries', '', 'Old Keg Whisky', 0),
(28, 'Old Fashioned', 'Whisky', 'Place sugar cube in old fashioned glass and saturate with bitter, add a dash of soda water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange slice, lemon twist and maraschino cherries.', '40ml Whisky, 1 Sugar Cube, 2 Dashes of Angostura Bitters, Splash of Soda water ', 'Orange Slice, lemon twist and maraschino cherries.', 'Old Keg Whisky', 0),
(29, 'Irish Coffee', 'Whisky', 'Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream. Garnish with cinnamon stick. Serve hot.', '40ml Keg Whisky, 80ml Hot Coffee, 30ml Fresh cream, 1 tbsp Brown Sugar', 'Cinnamon stick', 'Old Keg Whisky', 0),
(30, 'Godfather', 'Whisky', 'Pour ingredients over ice into a old-fashioned glass. Serve.', '50ml Whisky, 20ml Amaretto ', '', 'Old Keg Whisky', 0),
(31, 'Tusker', 'Arrack', 'Dry-shake all ingredients (without ice), then shake again with ice. Finely strain into a wide-mouthed coupe glass.', '60ml Arrack, 25ml Lemon juice, 2 bar spoonfuls of caster sugar, 2 drops of peach bitters, Egg white', '', 'Ceylon Arrack', 0),
(32, '7 & 7', 'Whisky', 'Fill highball glass with ice. Add whisky and 7-Up. Garnish with lemon wedge.', '50ml Whisky, 150ml 7-Up', 'Lemon-wheel', '', 0),
(33, 'Anaconda', 'Whisky', 'Fill shaker with ice cubes. Pour whisky and sambuca. Shake well and strain into shots.', '75ml Whisky, 75ml Sambuka', '', 'Jack Daniels Whisky', 0),
(34, 'Basil Julep', 'Whisky', 'Put couple of basil sprigs and sugar syrup into cocktail shaker. Thoroughly muddle the mixture and add whisky. Add several ice cubes and shake vigorously. Strain into rocks glass filled with ice cubes. Garnish with a basil spring.', '50ml Whisky, 15ml Sugar syrup', 'Basil springs', '', 0),
(35, 'Buck (mule) Cocktail', 'Rum, Vodka, Gin, Whisky', 'Fill collins glass with ice. Pour base liqure* over the ice. Add lime juice and top with ginger ale.', '50ml liqure*, 100ml Ginger Ale, Lime', '', 'Rum/Vodka/Gin/Whisky', 0),
(36, 'Highball', 'Whisky', 'Fill highball glass with ice. Pour whisky over the ice and top with ginger ale.', '60ml Whisky, 150ml Ginger Ale', '', 'Whisky', 0),
(37, 'Hot Toddy', 'Whisky, Brandy, Rum', 'Put sugar to the bottom of the Irish coffee glass. Pour liqure* and lemon juice. Fill the glass with hot water or tea. Garnish with a lemon wheel', '45ml liqure*, 100ml Water, 1 tsp Sugar, 10ml Lemon (optional)', 'Lemon wheel', 'Whisky/Brandy/Rum', 0),
(38, 'Bay Breeze', 'Vodka', 'Fill highball glass with ice. Add vodka, cranberry juice and pineapple juice. Stir and garnish lime wedge.', '40ml Vodka, 90ml Cranberry juice, 30ml Pineapple juice', 'Lime wedge', 'Vodka', 0),
(39, 'Caipiroska', 'Vodka', 'Cut half of lime into wedge, place them with sugar into rock glass and muddle. Add vodka and stir so that some sugar is dissolved. Add crushed ice and stir a little bit to melt some of the ice. Garnish with a lime piece.', '50ml Vodka, 2 tsp Sugar, Lime', 'Lime', 'Vodka', 0),
(40, 'Cape Cod', 'Vodka', 'Fill highball glass with ice. Add vodka and cranberry juice. Stir well and garnish with lime wedge.', '40ml Vodka, 120ml Cranberry juice', 'Lime wedge', '', 0),
(41, 'Colorado Bulldog', 'Vodka', 'Fill rocks glass with ice cubes. Pour vodka, coffe liqueur, milk or cream. Top with cola. Slightly stir with mixing tin.', '30ml Vodka, 30ml Coffee liqueur, 20ml Milk, 30ml Cola', '', 'Vodka', 0),
(42, 'Gimlet', 'Vodka, Gin', 'Fill a mixing glass with ice cubes. Add liqure* and lime juice. Optionally add sugar syrup. Stir and strain into chilled cocktail glass. Garnish with a lime wedge or twist.', '60ml liqure*, 15ml Sugar syrup (optional), 15ml Lime juice', 'Lime wedge', 'Vodka/Gin', 0),
(43, 'Rickey Cocktail', 'Rum, Vodka, Gin', 'Fill highball glass with ice. Add liqure*, lime juice top with soda. Garnish with lime wedge.', '50ml liqure*, 30ml Lime juice, 100ml Soda', 'Lime wedge', 'White Rum/Vodka/Gin', 0),
(44, 'Dark \'N\' Stormy', 'Rum', 'Fill highball glass with ice. Pour dark rum and top with ginger beer. Garnish with lime wedge.', '60ml Dark Rum, 100ml Ginger Beer', 'Lime wedge', 'Dark Rum', 0),
(45, '', '', '', '', '', '', 0),
(46, 'Gin Fizz', 'Gin', 'Fill highball glass with ice. Pour gin, lemon juice, and sugar syrup. Top with soda. Garnish with lemon slice.', '45ml Gin, 30ml Lemon juice, 10ml Sugar syrup, 80ml Soda', 'Lemon slice', 'Gin', 0),
(47, '', '', '', '', '', '', 0),
(48, 'Gin Tonic', 'Gin', 'Fill highball glass with ice. Pour gin and tonic over ice. Stir gently and garnish with a lime wedge.', '50ml Gin, 100ml Tonic', 'Lime wedge', 'Gin', 0),
(49, 'Greyhound', 'Gin, Vodka', 'Fill collins glass with ice cubes. Add liqure* and grapefruit juice. Stir well, garnish with a lemon wedge.', '50ml liqure*, 200ml Grapefruit juice', 'Lemon wedge', 'Gin/Vodka', 0),
(50, 'John Collins', 'Gin', 'Fill highball glass with ice. Add gin, lemon juice, sugar syrup. Top with soda and stir gently. Garnish with a lemon slice and maraschino cherry', '45ml Gin, 30ml Lemon juice, 15ml Sugar syrup, 60ml Soda', 'Lemon slice, Maraschino cherry', 'Gin', 0),
(51, 'Paradise', 'Gin, Brandy', 'Fill shaker with ice. Add gin, brandy and orange juice. Shake well and strain into cocktail glass.', '35ml Gin, 20ml Brandy, 15ml Orange juice ', '', 'Gin, Brandy', 0),
(52, 'Brandy Egg Nogg', 'Brandy', 'Fill shaker with ice cubes. Add brandy, milk, sugar syrup and an egg york. Shake well and strain into highball with ice. Sprinkle with grated nutmeg.', '40ml Brandy, 50ml Milk, 10ml Sugar syrup, 1 Egg', 'Grated nutmeg', 'Brandy', 0),
(53, 'Champagne Cocktail', 'Brandy', 'Put half of sugar cube into champagne flute and add two dashes of angosture bitters. Pour brandy and chilled dry champagne. Garnish with orange slice and maraschino cherry.', '10ml Brandy, 90ml Sparkling wine, 2 dashes of Angostura bitters (optional), 1 cube Sugar', 'Orange slice, Maraschino cherry', 'Brandy, Sparkling wine', 0),
(54, 'Horse\'s Neck', 'Brandy', 'Fill rocks glass with ice. Pour brandy over ice. Top with ginger ale and stir gently. Put a dash of angostura bitter at your taste. Garnish with lemon peel.', '40ml Brandy, 120ml Ginger Ale, 1 dash Anagosture bitters', 'Lemon peel', 'Brandy', 0),
(55, '', '', '', '', '', '', 0),
(56, 'Sangria', 'Brandy', 'Pour one bottleof red or white wine into pitcher. Cut an orange and lemon into wedges and slightly squeeze them into wine. Add other fruits according to your taste. Add 3-4 teaspoon of sugar or honey. Pour brandy and optionally ginger ale or soda (if you want the drink to be softer). Optionally add some ice cubes and stir.', '750ml Wine, 50ml Brandy, 3-4 tsp Sugar, 200m Soda (optional), Orange, Lemon', '', 'Brandy, Wine', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cocktail_recipes`
--
ALTER TABLE `cocktail_recipes`
  ADD PRIMARY KEY (`cr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cocktail_recipes`
--
ALTER TABLE `cocktail_recipes`
  MODIFY `cr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
