/**
 * Problem 3:
 * param range -50 and 50
 * when the user clicks ok optionalPow(2, 3) // should return 8
 * when the user clicks cancel optionalPow(2, 3) // should return 9
 */
function optionalPow(a, b) {
  if (!(a >= -50 && a <= 50 && b >= -50 && b <= 50)) {
    return;
  }

  return confirm("optionalPow") ? a ** b : b ** a;
}
