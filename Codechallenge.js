// Problem One: Trains

// Problem:  The local commuter railroad services a number of towns in Kiwiland.  Because of monetary concerns, all of the tracks are 'one-way.'  That is, a route from Kaitaia to Invercargill does not imply the existence of a route from Invercargill to Kaitaia.  In fact, even if both of these routes do happen to exist, they are distinct and are not necessarily the same distance!

// The purpose of this problem is to help the railroad provide its customers with information about the routes.  In particular, you will compute the distance along a certain route, the number of different routes between two towns, and the shortest route between two towns.

// Input:  A directed graph where a node represents a town and an edge represents a route between two towns.  The weighting of the edge represents the distance between the two towns.  A given route will never appear more than once, and for a given route, the starting and ending town will not be the same town.
//  Test Input:

// For the test input, the towns are n\med using the first few letters of the alphabet from A to E.  A route between two towns (A to B) with a distance of 5 is represented as AB5.

// Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7




// Output: For test input 1 through 5, if no such route exists, output 'NO SUCH ROUTE'.  Otherwise, follow the route as given; do not make any extra stops!  For example, the first problem means to start at city A, then travel directly to city B (a distance of 5), then directly to city C (a distance of 4).

// 1. The distance of the route A-B-C.
// 2. The distance of the route A-D.
// 3. The distance of the route A-D-C.
// 4. The distance of the route A-E-B-C-D.
// 5. The distance of the route A-E-D.
// 6. The number of trips starting at C and ending at C with a maximum of 3 stops.  In the sample data below, there are two such trips: C-D-C (2 stops). and C-E-B-C (3 stops).
// 7. The number of trips starting at A and ending at C with exactly 4 stops.  In the sample data below, there are three such trips: A to C (via B,C,D); A to C (via D,C,D); and A to C (via D,E,B).
// 8. The length of the shortest route (in terms of distance to travel) from A to C.
// 9. The length of the shortest route (in terms of distance to travel) from B to B.
// 10. The number of different routes from C to C with a distance of less than 30.  In the sample data, the trips are: CDC, CEBC, CEBCDC, CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC.

// Test Input:

// For the test input, the towns are named using the first few letters of the alphabet from A to E.  A route between two towns (A to B) with a distance of 5 is represented as AB5.

// Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7

// Expected Output:

// Output #1: 9
// Output #2: 5
// Output #3: 13
// Output #4: 22
// Output #5: NO SUCH ROUTE
// Output #6: 2
// Output #7: 3
// Output #8: 9
// Output #9: 9
// Output #10: 7
//  ==========



//  1. The distance of the route A-B-C.
// 2. The distance of the route A-D.
// 3. The distance of the route A-D-C.
// 4. The distance of the route A-E-B-C-D.
// 5. The distance of the route A-E-D.
// 6. The number of trips starting at C and ending at C with a maximum of 3 stops.  In the sample data below, there are two such trips: C-D-C (2 stops). and C-E-B-C (3 stops).
// 7. The number of trips starting at A and ending at C with exactly 4 stops.  In the sample data below, there are three such trips: A to C (via B,C,D); A to C (via D,C,D); and A to C (via D,E,B).
// 8. The length of the shortest route (in terms of distance to travel) from A to C.
// 9. The length of the shortest route (in terms of distance to travel) from B to B.
// 10. The number of different routes from C to C with a distance of less than 30.  In the sample data, the trips are: CDC, CEBC, CEBCDC, CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC.







//  1. The distance of the route A-B-C.
// 2. The distance of the route A-D.
// 3. The distance of the route A-D-C.
// 4. The distance of the route A-E-B-C-D.
// 5. The distance of the route A-E-D.

function distanceRouter(v, w, x, y, z) {



    let StartPoint = v + w;
    let layover1 = w + x;
    let layover2 = x + y;
    let endPoint = y + z;


    function starting(youAreHere) {
        if (StartPoint == "AB") { StartPoint = 5 }
        else if (StartPoint == "BC") { StartPoint = 4 }
        else if (StartPoint == "CD") { StartPoint = 8 }
        else if (StartPoint == "DC") { StartPoint = 8 }
        else if (StartPoint == "DE") { StartPoint = 6 }
        else if (StartPoint == "AD") { StartPoint = 5 }
        else if (StartPoint == "CE") { StartPoint = 2 }
        else if (StartPoint == "EB") { StartPoint = 3 }
        else if (StartPoint == "AE") { StartPoint = 7 }
        else if (StartPoint == 'A0') { StartPoint = 0 }
        else if (StartPoint == 'B0') { StartPoint = 0 }
        else if (StartPoint == 'C0') { StartPoint = 0 }
        else if (StartPoint == 'D0') { StartPoint = 0 }
        else if (StartPoint == 'E0') { StartPoint = 0 }
        else if (StartPoint == '00') { StartPoint = 0 }
        else { startPoint = 'NO SUCH ROUTE' }
    }

    function first(firstStop) {
        if (layover1 == "AB") { layover1 = 5 }
        else if (layover1 == "BC") { layover1 = 4 }
        else if (layover1 == "CD") { layover1 = 8 }
        else if (layover1 == "DC") { layover1 = 8 }
        else if (layover1 == "DE") { layover1 = 6 }
        else if (layover1 == "AD") { layover1 = 5 }
        else if (layover1 == "CE") { layover1 = 2 }
        else if (layover1 == "EB") { layover1 = 3 }
        else if (layover1 == "AE") { layover1 = 7 }
        else if (layover1 == 'A0') { layover1 = 0 }
        else if (layover1 == 'B0') { layover1 = 0 }
        else if (layover1 == 'C0') { layover1 = 0 }
        else if (layover1 == 'D0') { layover1 = 0 }
        else if (layover1 == 'E0') { layover1 = 0 }
        else if (layover1 == '00') { layover1 = 0 }
        else { layover1 = 'NO SUCH ROUTE' }
    }

    function second(secondStop) {
        if (layover2 == "AB") { layover2 = 5 }
        else if (layover2 == "BC") { layover2 = 4 }
        else if (layover2 == "CD") { layover2 = 8 }
        else if (layover2 == "DC") { layover2 = 8 }
        else if (layover2 == "DE") { layover2 = 6 }
        else if (layover2 == "AD") { layover2 = 5 }
        else if (layover2 == "CE") { layover2 = 2 }
        else if (layover2 == "EB") { layover2 = 3 }
        else if (layover2 == "AE") { layover2 = 7 }
        else if (layover2 == 'A0') { layover2 = 0 }
        else if (layover2 == 'B0') { layover2 = 0 }
        else if (layover2 == 'C0') { layover2 = 0 }
        else if (layover2 == 'D0') { layover2 = 0 }
        else if (layover2 == 'E0') { layover2 = 0 }
        else if (layover2 == '00') { layover2 = 0 }
        else { layover2 = 'NO SUCH ROUTE' }
    }
    function end(third) {
        if (endPoint == "AB") { 5 }
        else if (endPoint == 'BC') { endPoint = 4 }
        else if (endPoint == 'CD') { endPoint = 8 }
        else if (endPoint == 'DC') { endPoint = 8 }
        else if (endPoint == 'DE') { endPoint = 6 }
        else if (endPoint == 'AD') { endPoint = 5 }
        else if (endPoint == 'CE') { endPoint = 2 }
        else if (endPoint == 'EB') { endPoint = 3 }
        else if (endPoint == 'AE') { endPoint = 7 }
        else if (endPoint == 'A0') { endPoint = 0 }
        else if (endPoint == 'B0') { endPoint = 0 }
        else if (endPoint == 'C0') { endPoint = 0 }
        else if (endPoint == 'D0') { endPoint = 0 }
        else if (endPoint == 'E0') { endPoint = 0 }
        else if (endPoint == '00') { endPoint = 0 }
        else { endPoint = 'NO SUCH ROUTE' }
    }


    starting(StartPoint)
    first(layover1)
    second(layover2)
    end(endPoint)

    let tripDistance = StartPoint + layover1 + layover2 + endPoint


    function isRout(layover1, StartPoint,endPoint,layover2) {
        if (layover1 == 'NO SUCH ROUTE' || StartPoint == 'NO SUCH ROUTE' || endPoint == 'NO SUCH ROUTE' || layover2 == 'NO SUCH ROUTE') { console.log('NO SUCH ROUTE') }
        else { console.log("Your total trip will  have a distance of " + tripDistance) }
    }


    console.log("Your trip from " + v + " to " + w + " will have a distance of " + StartPoint)
    console.log("Your trip from " + w + " to " + x + " will have a distance of " + layover1)
    console.log("Your trip from " + x + " to " + y + " will have a distance of " + layover2)
    console.log("Your trip from " + y + " to " + z + " will have a distance of " + endPoint)
    isRout(StartPoint, layover1, endPoint, layover2)
}


distanceRouter("A", "B", "C", 0, 0);

distanceRouter("A", "D", 0, 0, 0);

distanceRouter("A", "D", "C", 0, 0);

distanceRouter("A", "E", "B", "C", "D");

distanceRouter("A", "E", "D", 0, 0);
