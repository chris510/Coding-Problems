# John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

# Function Description

# Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

# sockMerchant has the following parameter(s):

# n: the number of socks in the pile
# ar: the colors of each sock
# Input Format

# The first line contains an integer , the number of socks represented in .
# The second line contains  space-separated integers describing the colors  of the socks in the pile.

# Constraints

#  where 
# Output Format

# Return the total number of matching pairs of socks that John can sell.

# Sample Input
# 9
# 10 20 20 10 10 30 50 10 20
# Sample Output

# 3
# Explanation
# sock.png
# John can match three pairs of socks.

def sockMerchant(n, ar):
  count = 0
  ar.sort()
  ar.append('#')
  i = 0
  while i<n:
    if ar[i]==ar[i+1]:
      count = count+1
      i+=2
    else:
      i+=1
  return count

#Time: O(n log n) | Space: O(1)

def sockMerchant(n, ar):
  pairs = 0
  seen_socks = set()

  for sock in ar:
    if sock in seen_socks:
      pairs += 1
      seen_socks.remove(sock) 
    else:
      seen_socks.add(sock)
  return pairs

# Time: O(n) | Space: O(n)