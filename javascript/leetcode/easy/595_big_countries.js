// SQL Schema
// There is a table World

// +-----------------+------------+------------+--------------+---------------+
// | name            | continent  | area       | population   | gdp           |
// +-----------------+------------+------------+--------------+---------------+
// | Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
// | Albania         | Europe     | 28748      | 2831741      | 12960000      |
// | Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
// | Andorra         | Europe     | 468        | 78115        | 3712000       |
// | Angola          | Africa     | 1246700    | 20609294     | 100990000     |
// +-----------------+------------+------------+--------------+---------------+
// A country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.

// Write a SQL solution to output big countries' name, population and area.

// For example, according to the above table, we should output:

// +--------------+-------------+--------------+
// | name         | population  | area         |
// +--------------+-------------+--------------+
// | Afghanistan  | 25500100    | 652230       |
// | Algeria      | 37100000    | 2381741      |
// +--------------+-------------+--------------+

//THOUGHTPROCESS: We want to find any 'big' country(which has a population more than 3 million sq km or 25 million people)

SELECT name, population, area
FROM world
WHERE area > 3000000 OR population > 25000000

// Above solution is apparently really slow and on leet code its only 5% faster than the rest of the submission.

// #Union
SELECT name, population, area
FROM World
WHERE area > 3000000 

UNION

SELECT name, population, area
FROM World
WHERE population > 25000000

// Above uses the keyword union, at first initial glance, it looks like it is doing 2 separate queries.
// Union is only faster than or when it comes to cases that has the user SEARCH TWO DIFFERENT COLUMNS like the above problem.
// Can also use 'UNION ALL' since the result does not need to be sorted.

//MySQL uses one index in a given table. so it uses the first index(area) and second index(population) to find the appropriate query.
//Using UNION will use the index of its search and then combine the sub queries;


// example benchmarks
// Scenario 3: Selecting all columns for different fields
//             CPU      Reads        Duration       Row Counts
// OR           47       1278           443           1228
// UNION        31       1334           400           1228

// Scenario 4: Selecting Clustered index columns for different fields
//             CPU      Reads        Duration       Row Counts
// OR           0         319           366           1228
// UNION        0          50           193           1228