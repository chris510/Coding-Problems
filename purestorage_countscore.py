
# Complete the compute_number_score function below.
def compute_number_score(number):
  score = 0
  digits = [int(i) for i in str(number)]

  # odd score
  score += len([i for i in digits if i % 2 != 0 or i == 0]) * 1

  # multiple of 5
  if number % 5 == 0:
    score += 6

  # found 5
  score += len([i for i in digits if i == 5]) * 2
  
  # consecutive 3's
  score += get_three_score(str(number))

  # sequence score
  score += get_sequence_score(str(number))

  return score

def get_three_score(number):
  score = 0
  for i in range(len(number) - 1):
    if number[i] == '3' and number[i + 1] == '3':
      score += 4
  return score

def get_sequence_score(number):
  first_num = number
  score = 0
  digits, sequence = [], []

  number = int(number[::-1])
  while number > 0:
    digits.append(number % 10)
    number = number // 10
  
  while len(digits) < len(first_num):
    digits.append(0)
  sequence.append(digits[0])

  for i in range(1, len(digits)):
    if digits[i] == digits[i - 1] - 1:
      sequence.append(digits[i])
    else:
      score += (len(sequence) * len(sequence))
      sequence = [digits[i]]
  if len(sequence) > 1:
    score += (len(sequence) * len(sequence))
  else:
    score += 1
  return score
