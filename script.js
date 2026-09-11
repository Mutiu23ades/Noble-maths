const topics = {

    1: {
        title: "Number Bases",
        lesson: `
            <p>A number base tells us how many digits are used to represent numbers. 
            The decimal system has base 10 and uses 0–9. Other common bases include binary (base 2), 
            octal (base 8) and hexadecimal (base 16).</p>

            <p>In base 2, the digits are only 0 and 1. A number such as
            <strong>1011<sub>2</sub></strong> means:</p>

            <p>1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = <strong>11<sub>10</sub></strong>.</p>

            <p>To convert a decimal number to another base, repeatedly divide by the new base
            and read the remainders from bottom to top.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example 1:</strong> Convert 25<sub>10</sub> to base 2.<br><br>
                25 ÷ 2 = 12 remainder 1<br>
                12 ÷ 2 = 6 remainder 0<br>
                6 ÷ 2 = 3 remainder 0<br>
                3 ÷ 2 = 1 remainder 1<br>
                1 ÷ 2 = 0 remainder 1<br><br>
                Therefore, <strong>25<sub>10</sub> = 11001<sub>2</sub></strong>.
            </div>

            <div class="example-box">
                <strong>Example 2:</strong> Convert 132<sub>4</sub> to base 10.<br><br>
                = 1×4² + 3×4¹ + 2×4⁰<br>
                = 16 + 12 + 2<br>
                = <strong>30<sub>10</sub></strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Convert 19<sub>10</sub> to base 2.</p>
                <p>2. Convert 10101<sub>2</sub> to base 10.</p>
                <p>3. Convert 243<sub>5</sub> to base 10.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p><strong>Answers:</strong></p>
                <p>1. 10011<sub>2</sub></p>
                <p>2. 21<sub>10</sub></p>
                <p>3. 73<sub>10</sub></p>
            </div>
        `
    },

    2: {
        title: "Fractions and Decimals",
        lesson: `
            <p>A fraction represents part of a whole. The top number is the numerator and
            the bottom number is the denominator.</p>
            <p>Fractions can be proper, improper or mixed numbers. To add or subtract fractions
            with different denominators, first find a common denominator.</p>
            <p>Decimals are another way of representing fractions. For example,
            0.75 = 75/100 = 3/4.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example:</strong> Calculate 2/3 + 1/6.<br><br>
                LCM of 3 and 6 = 6.<br>
                2/3 = 4/6.<br>
                Therefore 4/6 + 1/6 = <strong>5/6</strong>.
            </div>
            <div class="example-box">
                <strong>Decimal example:</strong><br>
                0.4 × 0.5 = 0.20 = <strong>0.2</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Calculate 3/4 + 2/5.</p>
                <p>2. Convert 0.625 to a fraction in its simplest form.</p>
                <p>3. Calculate 2.5 × 0.4.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 23/20 = 1 3/20</p>
                <p>2. 5/8</p>
                <p>3. 1</p>
            </div>
        `
    },

    3: {
        title: "Approximation and Estimation",
        lesson: `
            <p>Approximation means replacing a number with a nearby value that is easier to use.
            Numbers may be rounded to the nearest whole number, ten, hundred, decimal place or
            significant figure.</p>
            <p>When rounding, look at the digit immediately after the required place.
            If it is 5 or greater, increase the required digit by 1. If it is less than 5,
            leave it unchanged.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example 1:</strong> Round 47.386 to 2 decimal places.<br>
                The third decimal digit is 6, so increase 8 to 9.<br>
                Answer: <strong>47.39</strong>.
            </div>
            <div class="example-box">
                <strong>Example 2:</strong> Estimate 398 × 21.<br>
                398 ≈ 400 and 21 ≈ 20.<br>
                400 × 20 = <strong>8,000</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Round 63.847 to 1 decimal place.</p>
                <p>2. Round 5,746 to the nearest hundred.</p>
                <p>3. Estimate 49.8 × 10.2.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 63.8</p>
                <p>2. 5,700</p>
                <p>3. Approximately 500</p>
            </div>
        `
    },

    4: {
        title: "Standard Form",
        lesson: `
            <p>Standard form is used to write very large or very small numbers conveniently.
            A number in standard form is written as <strong>a × 10<sup>n</sup></strong>,
            where 1 ≤ a &lt; 10 and n is an integer.</p>
            <p>Moving the decimal point to the left gives a positive power of 10.
            Moving it to the right gives a negative power.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example 1:</strong> 45,000 = <strong>4.5 × 10<sup>4</sup></strong>.
            </div>
            <div class="example-box">
                <strong>Example 2:</strong> 0.00072 = <strong>7.2 × 10<sup>-4</sup></strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Express 6,300,000 in standard form.</p>
                <p>2. Express 0.000045 in standard form.</p>
                <p>3. Write 3.2 × 10<sup>5</sup> as an ordinary number.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 6.3 × 10<sup>6</sup></p>
                <p>2. 4.5 × 10<sup>-5</sup></p>
                <p>3. 320,000</p>
            </div>
        `
    },

    5: {
        title: "Logarithms",
        lesson: `
            <p>A logarithm is another way of expressing an index. If
            <strong>a<sup>x</sup> = N</strong>, then <strong>log<sub>a</sub>N = x</strong>.</p>
            <p>For example, since 2³ = 8, log₂8 = 3.</p>
            <p>Important laws include:
            log(ab) = log a + log b,
            log(a/b) = log a − log b,
            and log(a<sup>n</sup>) = n log a.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example:</strong> Evaluate log₂32.<br>
                Since 2⁵ = 32, therefore <strong>log₂32 = 5</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Evaluate log₃27.</p>
                <p>2. Evaluate log₁₀1000.</p>
                <p>3. If 5<sup>x</sup> = 125, find x.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 3</p>
                <p>2. 3</p>
                <p>3. x = 3</p>
            </div>
        `
    },

    6: {
        title: "Indices",
        lesson: `
            <p>Indices are powers or exponents. They show how many times a number is multiplied
            by itself.</p>
            <p>Important laws include:
            a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>,
            a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup>,
            (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>,
            a<sup>0</sup> = 1, and a<sup>-n</sup> = 1/a<sup>n</sup>.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example:</strong> Simplify 2³ × 2⁴.<br>
                = 2<sup>3+4</sup> = 2⁷ = <strong>128</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Simplify 3² × 3³.</p>
                <p>2. Simplify 5⁶ ÷ 5².</p>
                <p>3. Evaluate 2<sup>-3</sup>.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 3⁵ = 243</p>
                <p>2. 5⁴ = 625</p>
                <p>3. 1/8</p>
            </div>
        `
    },

    7: {
        title: "Surds",
        lesson: `
            <p>A surd is an irrational root that cannot be expressed exactly as a rational number.
            Examples include √2, √3 and √5.</p>
            <p>To simplify a surd, take out perfect-square factors. For example,
            √12 = √(4×3) = 2√3.</p>
        `,
        examples: `
            <div class="example-box">
                <strong>Example:</strong> Simplify √48.<br>
                √48 = √(16×3) = <strong>4√3</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Simplify √18.</p>
                <p>2. Simplify √75.</p>
                <p>3. Simplify 2√8.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 3√2</p>
                <p>2. 5√3</p>
                <p>3. 4√2</p>
            </div>
        `
    },

    8: {
        title: "Sets",
        lesson: `
            <p>A set is a well-defined collection of objects. Sets may be represented by listing
            their members or using set-builder notation.</p>
            <p>Important operations include union (∪), intersection (∩), complement and difference.
            A universal set contains all objects under consideration.</p>
        `,
        examples: `
            <div class="example-box">
                Let A = {1,2,3,4} and B = {3,4,5,6}.<br><br>
                A ∪ B = <strong>{1,2,3,4,5,6}</strong><br>
                A ∩ B = <strong>{3,4}</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. If A={2,4,6} and B={4,6,8}, find A∩B.</p>
                <p>2. Find A∪B.</p>
                <p>3. How many elements are in {a,b,c,d,e}?</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. {4,6}</p>
                <p>2. {2,4,6,8}</p>
                <p>3. 5</p>
            </div>
        `
    },

    9: {
        title: "Algebraic Expressions",
        lesson: `
            <p>An algebraic expression contains numbers, variables and operations.
            Terms with the same variables and powers are called like terms.</p>
            <p>Like terms can be collected by adding or subtracting their coefficients.
            Brackets can be removed using the distributive law.</p>
        `,
        examples: `
            <div class="example-box">
                Simplify 3x + 5x − 2.<br>
                = <strong>8x − 2</strong>.
            </div>
            <div class="example-box">
                Expand 4(x + 3).<br>
                = <strong>4x + 12</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Simplify 7x + 2x − 4.</p>
                <p>2. Expand 3(2x + 5).</p>
                <p>3. Simplify 5a + 3b − 2a + b.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 9x − 4</p>
                <p>2. 6x + 15</p>
                <p>3. 3a + 4b</p>
            </div>
        `
    },

    10: {
        title: "Factorization",
        lesson: `
            <p>Factorization is the process of writing an expression as a product of simpler
            expressions. A common factor should be taken out first.</p>
            <p>For quadratic expressions, look for two numbers whose product is the constant term
            and whose sum is the coefficient of x.</p>
        `,
        examples: `
            <div class="example-box">
                Factorize x² + 5x + 6.<br>
                Numbers with product 6 and sum 5 are 2 and 3.<br>
                Therefore <strong>(x+2)(x+3)</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Factorize 3x + 6.</p>
                <p>2. Factorize x² + 7x + 12.</p>
                <p>3. Factorize x² − 9.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 3(x+2)</p>
                <p>2. (x+3)(x+4)</p>
                <p>3. (x−3)(x+3)</p>
            </div>
        `
    },

    11: {
        title: "Linear Equations",
        lesson: `
            <p>A linear equation has a variable whose highest power is 1.
            To solve it, perform the same operation on both sides of the equation until
            the variable is isolated.</p>
        `,
        examples: `
            <div class="example-box">
                Solve 3x + 5 = 20.<br>
                3x = 15<br>
                x = <strong>5</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Solve 2x + 7 = 17.</p>
                <p>2. Solve 5x − 4 = 21.</p>
                <p>3. Solve 4(x+2)=24.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. x = 5</p>
                <p>2. x = 5</p>
                <p>3. x = 4</p>
            </div>
        `
    },

    12: {
        title: "Change of Subject of Formula",
        lesson: `
            <p>Changing the subject of a formula means rearranging an equation so that a chosen
            variable appears alone on one side.</p>
            <p>Use inverse operations carefully and preserve equality on both sides.</p>
        `,
        examples: `
            <div class="example-box">
                Given y = 3x + 5, make x the subject.<br>
                y − 5 = 3x<br>
                Therefore <strong>x = (y−5)/3</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Make x the subject of y = 2x + 7.</p>
                <p>2. Make r the subject of A = πr².</p>
                <p>3. Make t the subject of v = u + at.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. x=(y−7)/2</p>
                <p>2. r=√(A/π)</p>
                <p>3. t=(v−u)/a</p>
            </div>
        `
    },

    13: {
        title: "Simultaneous Equations",
        lesson: `
            <p>Simultaneous equations are two or more equations involving the same unknowns.
            The solution must satisfy all equations.</p>
            <p>They can be solved by substitution or elimination.</p>
        `,
        examples: `
            <div class="example-box">
                Solve x+y=10 and x−y=2.<br><br>
                Adding the equations gives 2x=12, so x=6.<br>
                Substitute into x+y=10: y=4.<br>
                Answer: <strong>x=6, y=4</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Solve x+y=9 and x−y=3.</p>
                <p>2. Solve 2x+y=11 and x+y=7.</p>
                <p>3. Solve x+2y=8 and x−y=2.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. x=6, y=3</p>
                <p>2. x=4, y=3</p>
                <p>3. x=4, y=2</p>
            </div>
        `
    },

    14: {
        title: "Quadratic Equations",
        lesson: `
            <p>A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0.
            Quadratics can be solved by factorization, completing the square or the quadratic formula.</p>
            <p>The quadratic formula is:
            x = (-b ± √(b²−4ac))/(2a).</p>
        `,
        examples: `
            <div class="example-box">
                Solve x²−5x+6=0.<br>
                Factorize: (x−2)(x−3)=0.<br>
                Therefore <strong>x=2 or x=3</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Solve x²−7x+12=0.</p>
                <p>2. Solve x²−9=0.</p>
                <p>3. Solve x²+5x+6=0.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. x=3 or 4</p>
                <p>2. x=3 or −3</p>
                <p>3. x=−2 or −3</p>
            </div>
        `
    },

    15: {
        title: "Variation",
        lesson: `
            <p>Variation describes how one quantity changes in relation to another.
            In direct variation, y ∝ x, so y=kx. In inverse variation, y ∝ 1/x, so y=k/x.</p>
        `,
        examples: `
            <div class="example-box">
                If y varies directly as x and y=12 when x=3:<br>
                12=3k, so k=4.<br>
                Therefore <strong>y=4x</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. y varies directly as x. If y=20 when x=5, find y when x=8.</p>
                <p>2. y varies inversely as x. If y=6 when x=4, find y when x=8.</p>
                <p>3. State the equation for direct variation.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. y=32</p>
                <p>2. y=3</p>
                <p>3. y=kx</p>
            </div>
        `
    },

    16: {
        title: "Sequence and Series",
        lesson: `
            <p>A sequence is an ordered list of numbers. An arithmetic sequence has a constant
            difference between consecutive terms.</p>
            <p>The nth term of an arithmetic sequence is:
            aₙ = a + (n−1)d.</p>
            <p>The sum of n terms is:
            Sₙ = n/2[2a+(n−1)d].</p>
        `,
        examples: `
            <div class="example-box">
                For 3, 7, 11, 15,..., a=3 and d=4.<br>
                10th term = 3 + 9(4) = <strong>39</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the 8th term of 2,5,8,11,...</p>
                <p>2. Find the common difference of 4,9,14,19.</p>
                <p>3. Find the sum of the first 10 terms of 2,4,6,...</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 23</p>
                <p>2. 5</p>
                <p>3. 110</p>
            </div>
        `
    },

    17: {
        title: "Binary Operations",
        lesson: `
            <p>A binary operation combines two elements of a set to produce another element.
            An operation may be represented by a symbol such as *.</p>
            <p>For example, if a*b = a+b+ab, substitute the given values and simplify.</p>
        `,
        examples: `
            <div class="example-box">
                If a*b=a+b+ab, find 2*3.<br>
                =2+3+(2×3)=<strong>11</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. If a*b=a+b, find 5*7.</p>
                <p>2. If a*b=ab−1, find 4*3.</p>
                <p>3. If x*y=x−y, find 9*4.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 12</p>
                <p>2. 11</p>
                <p>3. 5</p>
            </div>
        `
    },

    18: {
        title: "Modular Arithmetic",
        lesson: `
            <p>Modular arithmetic deals with remainders after division. The expression
            a mod n means the remainder when a is divided by n.</p>
            <p>For example, 17 mod 5 = 2 because 17 = 5×3 + 2.</p>
        `,
        examples: `
            <div class="example-box">
                29 mod 6 = <strong>5</strong>, because 29 = 6×4 + 5.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find 20 mod 3.</p>
                <p>2. Find 35 mod 7.</p>
                <p>3. Find 42 mod 5.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 2</p>
                <p>2. 0</p>
                <p>3. 2</p>
            </div>
        `
    },

    19: {
        title: "Plane Geometry",
        lesson: `
            <p>Plane geometry studies shapes and figures on a flat surface.
            Important concepts include points, lines, angles, triangles, quadrilaterals
            and circles.</p>
            <p>The sum of angles in a triangle is 180° and the sum of angles around a point is 360°.</p>
        `,
        examples: `
            <div class="example-box">
                A triangle has angles 50° and 60°.<br>
                Third angle = 180°−50°−60° = <strong>70°</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the third angle of a triangle with angles 45° and 65°.</p>
                <p>2. What is the angle around a point?</p>
                <p>3. Find the fourth angle of a quadrilateral with angles 80°,90°,100°.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 70°</p>
                <p>2. 360°</p>
                <p>3. 90°</p>
            </div>
        `
    },

    20: {
        title: "Angles and Lines",
        lesson: `
            <p>Angles are formed when two lines or rays meet. Angles on a straight line
            add to 180°, while angles around a point add to 360°.</p>
            <p>When parallel lines are crossed by a transversal, corresponding and alternate
            angles are equal, while co-interior angles sum to 180°.</p>
        `,
        examples: `
            <div class="example-box">
                If two angles form a straight line and one is 125°, the other is
                180°−125° = <strong>55°</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the supplement of 68°.</p>
                <p>2. Find the angle around a point if three angles are 90°,120° and x.</p>
                <p>3. What is the sum of co-interior angles?</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 112°</p>
                <p>2. 150°</p>
                <p>3. 180°</p>
            </div>
        `
    },

    21: {
        title: "Triangles",
        lesson: `
            <p>A triangle is a three-sided polygon. Triangles may be classified by their sides
            as equilateral, isosceles or scalene, and by their angles as acute, right-angled
            or obtuse.</p>
            <p>The angle sum of every triangle is 180°.</p>
        `,
        examples: `
            <div class="example-box">
                An isosceles triangle has equal sides and therefore equal base angles.
                If the vertex angle is 40°, each base angle is
                (180°−40°)/2 = <strong>70°</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the third angle of a triangle with angles 35° and 85°.</p>
                <p>2. What are the equal angles in an isosceles triangle called?</p>
                <p>3. Find the hypotenuse of a right triangle with legs 3 cm and 4 cm.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 60°</p>
                <p>2. Base angles</p>
                <p>3. 5 cm</p>
            </div>
        `
    },

    22: {
        title: "Quadrilaterals and Polygons",
        lesson: `
            <p>A quadrilateral has four sides and its interior angles sum to 360°.
            Examples include squares, rectangles, parallelograms, rhombuses and trapeziums.</p>
            <p>The sum of the interior angles of an n-sided polygon is
            (n−2)×180°.</p>
        `,
        examples: `
            <div class="example-box">
                Sum of interior angles of a pentagon:<br>
                (5−2)×180° = <strong>540°</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the angle sum of a hexagon.</p>
                <p>2. Find the angle sum of a quadrilateral.</p>
                <p>3. Find each angle of a regular pentagon.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 720°</p>
                <p>2. 360°</p>
                <p>3. 108°</p>
            </div>
        `
    },

    23: {
        title: "Circles",
        lesson: `
            <p>A circle is the set of all points at the same distance from a fixed centre.
            The distance from the centre to the circumference is the radius, while the
            distance across the circle through the centre is the diameter.</p>
            <p>Diameter = 2r. Circumference = 2πr. Area = πr².</p>
        `,
        examples: `
            <div class="example-box">
                For a circle of radius 7 cm:<br>
                Circumference = 2×π×7 = <strong>14π cm</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the diameter of a circle with radius 8 cm.</p>
                <p>2. Find the circumference when r=7 cm, using π=22/7.</p>
                <p>3. Find the area when r=7 cm, using π=22/7.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 16 cm</p>
                <p>2. 44 cm</p>
                <p>3. 154 cm²</p>
            </div>
        `
    },

    24: {
        title: "Mensuration of Plane Shapes",
        lesson: `
            <p>Mensuration deals with measurement of lengths, perimeters and areas.
            Rectangle area = length × width. Triangle area = 1/2 × base × height.
            Parallelogram area = base × height.</p>
        `,
        examples: `
            <div class="example-box">
                A rectangle of length 12 cm and width 5 cm has area:<br>
                12×5 = <strong>60 cm²</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the area of a triangle with base 10 cm and height 8 cm.</p>
                <p>2. Find the perimeter of a rectangle 9 cm by 4 cm.</p>
                <p>3. Find the area of a parallelogram with base 12 cm and height 6 cm.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 40 cm²</p>
                <p>2. 26 cm</p>
                <p>3. 72 cm²</p>
            </div>
        `
    },

    25: {
        title: "Mensuration of Solids",
        lesson: `
            <p>Solid mensuration involves three-dimensional objects such as cuboids,
            cylinders, prisms, cones and spheres.</p>
            <p>Volume of a cuboid = lwh. Volume of a cylinder = πr²h.
            Volume of a sphere = 4/3πr³.</p>
        `,
        examples: `
            <div class="example-box">
                A cuboid measuring 5 cm × 4 cm × 3 cm has volume:<br>
                5×4×3 = <strong>60 cm³</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the volume of a cuboid 10×5×2 cm.</p>
                <p>2. Find the volume of a cylinder with r=7 cm and h=10 cm using π=22/7.</p>
                <p>3. What is the unit of volume of a cube measured in centimetres?</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 100 cm³</p>
                <p>2. 1540 cm³</p>
                <p>3. cm³</p>
            </div>
        `
    },

    26: {
        title: "Coordinate Geometry",
        lesson: `
            <p>Coordinate geometry uses ordered pairs (x,y) to locate points on a Cartesian plane.
            The horizontal axis is the x-axis and the vertical axis is the y-axis.</p>
            <p>The distance between points can be found using the distance formula:
            √[(x₂−x₁)²+(y₂−y₁)²].</p>
        `,
        examples: `
            <div class="example-box">
                Distance between (1,2) and (4,6):<br>
                √[(4−1)²+(6−2)²] = √(9+16) = <strong>5</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. What is the x-coordinate of (5,8)?</p>
                <p>2. What is the y-coordinate of (−3,7)?</p>
                <p>3. Find the distance between (0,0) and (6,8).</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 5</p>
                <p>2. 7</p>
                <p>3. 10 units</p>
            </div>
        `
    },

    27: {
        title: "Straight Lines and Graphs",
        lesson: `
            <p>A straight-line graph can be written as y=mx+c, where m is the gradient
            and c is the y-intercept.</p>
            <p>Gradient = change in y / change in x.</p>
        `,
        examples: `
            <div class="example-box">
                For y=3x+2, the gradient is <strong>3</strong> and the y-intercept is <strong>2</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. State the gradient of y=5x−4.</p>
                <p>2. State the y-intercept of y=2x+7.</p>
                <p>3. Find the gradient between (1,2) and (3,8).</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 5</p>
                <p>2. 7</p>
                <p>3. 3</p>
            </div>
        `
    },

    28: {
        title: "Trigonometry",
        lesson: `
            <p>Trigonometry relates angles and sides of triangles. In a right-angled triangle,
            SOH-CAH-TOA is useful:</p>
            <p>sin θ = opposite/hypotenuse<br>
            cos θ = adjacent/hypotenuse<br>
            tan θ = opposite/adjacent.</p>
        `,
        examples: `
            <div class="example-box">
                If opposite=3 and hypotenuse=5:<br>
                sin θ = 3/5 = <strong>0.6</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. If opposite=6 and hypotenuse=10, find sin θ.</p>
                <p>2. If adjacent=4 and hypotenuse=5, find cos θ.</p>
                <p>3. If opposite=6 and adjacent=3, find tan θ.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 0.6</p>
                <p>2. 0.8</p>
                <p>3. 2</p>
            </div>
        `
    },

    29: {
        title: "Bearings and Distances",
        lesson: `
            <p>A bearing gives the direction of one point from another, measured clockwise
            from North. Bearings are written using three digits, for example 045°.</p>
            <p>Bearings are especially useful in navigation and surveying. Draw a north line
            at the starting point before measuring a bearing.</p>
        `,
        examples: `
            <div class="example-box">
                A direction of East has a bearing of <strong>090°</strong>.
                South has a bearing of <strong>180°</strong>.
                West has a bearing of <strong>270°</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. State the bearing of North.</p>
                <p>2. State the bearing of East.</p>
                <p>3. State the bearing of West.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 000° or 360°</p>
                <p>2. 090°</p>
                <p>3. 270°</p>
            </div>
        `
    },

    30: {
        title: "Statistics",
        lesson: `
            <p>Statistics is the collection, presentation, analysis and interpretation of data.
            Data may be presented using tables, bar charts, pie charts, histograms and graphs.</p>
            <p>Frequency tells us how often a value occurs.</p>
        `,
        examples: `
            <div class="example-box">
                For the data 2, 3, 3, 4, 5, the frequency of 3 is <strong>2</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the frequency of 4 in 2,4,4,5,6.</p>
                <p>2. How many observations are in 3,5,7,8?</p>
                <p>3. Name one method of presenting data.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 2</p>
                <p>2. 4</p>
                <p>3. Bar chart (among other correct answers)</p>
            </div>
        `
    },

    31: {
        title: "Measures of Central Tendency",
        lesson: `
            <p>The main measures of central tendency are mean, median and mode.</p>
            <p>Mean = sum of observations ÷ number of observations.
            Median is the middle value after arranging the data.
            Mode is the value that occurs most frequently.</p>
        `,
        examples: `
            <div class="example-box">
                For 2,4,6,8,10:<br>
                Mean = 30/5 = <strong>6</strong>.<br>
                Median = <strong>6</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find the mean of 4,6,8,10.</p>
                <p>2. Find the median of 2,5,7,9,12.</p>
                <p>3. Find the mode of 3,4,4,5,6.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 7</p>
                <p>2. 7</p>
                <p>3. 4</p>
            </div>
        `
    },

    32: {
        title: "Probability",
        lesson: `
            <p>Probability measures how likely an event is to occur. For equally likely outcomes:</p>
            <p>Probability = number of favourable outcomes ÷ total number of possible outcomes.</p>
            <p>Probability lies between 0 and 1. An impossible event has probability 0,
            while a certain event has probability 1.</p>
        `,
        examples: `
            <div class="example-box">
                A fair die has six outcomes. The probability of getting a 4 is
                <strong>1/6</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. What is the probability of getting a head when a fair coin is tossed?</p>
                <p>2. What is the probability of rolling a 6 on a fair die?</p>
                <p>3. What is the probability of an impossible event?</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 1/2</p>
                <p>2. 1/6</p>
                <p>3. 0</p>
            </div>
        `
    },

    33: {
        title: "Permutation",
        lesson: `
            <p>Permutation is an arrangement of objects where order matters.
            The number of arrangements of n different objects is n!.</p>
            <p>For example, 3! = 3×2×1 = 6.</p>
        `,
        examples: `
            <div class="example-box">
                In how many ways can 3 different books be arranged?<br>
                3! = 3×2×1 = <strong>6 ways</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Evaluate 4!.</p>
                <p>2. Evaluate 5!.</p>
                <p>3. How many ways can 3 students stand in a line?</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 24</p>
                <p>2. 120</p>
                <p>3. 6 ways</p>
            </div>
        `
    },

    34: {
        title: "Combination",
        lesson: `
            <p>Combination is the selection of objects where order does not matter.
            The formula is:</p>
            <p><strong>nCr = n! / [r!(n−r)!]</strong>.</p>
            <p>For example, choosing 2 students from 5 students is a combination because
            choosing A then B is the same selection as choosing B then A.</p>
        `,
        examples: `
            <div class="example-box">
                Find 5C2.<br>
                5C2 = 5!/(2!3!) = <strong>10</strong>.
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. Find 4C2.</p>
                <p>2. Find 6C2.</p>
                <p>3. Find 5C3.</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 6</p>
                <p>2. 15</p>
                <p>3. 10</p>
            </div>
        `
    },

    35: {
        title: "Introduction to Matrices",
        lesson: `
            <p>A matrix is a rectangular arrangement of numbers in rows and columns.
            The order of a matrix is written as rows × columns.</p>
            <p>For example, a matrix with 2 rows and 3 columns has order 2×3.</p>
            <p>Matrices can be added or subtracted when they have the same order.
            Corresponding elements are added or subtracted.</p>
        `,
        examples: `
            <div class="example-box">
                Let<br>
                A = [1  2]<br>
                    [3  4]<br><br>
                and<br>
                B = [5  6]<br>
                    [7  8].<br><br>
                Then<br>
                A+B = [6  8]<br>
                       [10 12].
            </div>
        `,
        practice: `
            <div class="practice-box">
                <p>1. What is the order of a matrix with 3 rows and 2 columns?</p>
                <p>2. Can two matrices of orders 2×3 and 2×3 be added?</p>
                <p>3. Add [1 2] and [3 4].</p>
            </div>
        `,
        answers: `
            <div class="answer-box">
                <p>1. 3×2</p>
                <p>2. Yes</p>
                <p>3. [4 6]</p>
            </div>
        `
    }
};


function showTopic() {

    const select = document.getElementById("topicSelect");
    const lesson = document.getElementById("lesson");

    const topicNumber = select.value;

    if (!topicNumber) {
        lesson.innerHTML = `
            <div class="empty-state">
                <h2>Choose a Topic</h2>
                <p>Select any of the 35 topics above to begin learning.</p>
            </div>
        `;
        return;
    }

    const topic = topics[topicNumber];

    if (!topic) {
        lesson.innerHTML = `
            <div class="empty-state">
                <h2>Topic Not Found</h2>
                <p>Please select another topic.</p>
            </div>
        `;
        return;
    }

    lesson.innerHTML = `
        <h2 class="lesson-title">
            Topic ${topicNumber}: ${topic.title}
        </h2>

        <h3>Lesson</h3>
        ${topic.lesson}

        <h3>Worked Examples</h3>
        ${topic.examples}

        <h3>Practice Questions</h3>
        ${topic.practice}

        <h3>Answers</h3>
        ${topic.answers}
    `;

    window.scrollTo({
        top: lesson.offsetTop - 15,
        behavior: "smooth"
    });
}
