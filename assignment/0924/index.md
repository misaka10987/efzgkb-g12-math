# 9/24 作业

Homework 5

1. (1) $\begin{pmatrix}\mathop{-}2 & 1 & 1\\
   \mathop{-}6 & 1 & 4\\
   5 & \mathop{-}1 & \mathop{-}3\end{pmatrix}$ .

   (2) $\begin{pmatrix}3 & \mathop{-}5 & 0 & 0\\
   \mathop{-}1 & 2 & 0 & 0\\
   0 & 0 & 5 & \mathop{-}2\\
   0 & 0 & \mathop{-}2 & 1\end{pmatrix}$ .

   (3) $\begin{pmatrix}1 & 0 & 0 & 0 & 0\\
   \mathop{-}1 & 1 & 0 & 0 & 0\\
   1 & \mathop{-}2 & 1 & 0 & 0\\
   \mathop{-}1 & 3 & \mathop{-}3 & 1 & 0\\
   1 & \mathop{-}4 & 6 & \mathop{-}4 & 1\end{pmatrix}$ .

2. $\R - \left\{ 1, 2 \right\}$ .

3. $\pm \mathbf 1_2$ .

4. $\begin{pmatrix}\mathop{-}2 & 1\\
   10 & \mathop{-}4\\
   \mathop{-}10 & 4\end{pmatrix}$ .

5. (1) $\begin{pmatrix} 2-2^n & 2^n-1 \\ 2-2^{n+1} & 2^{n+1}-1 \end{pmatrix}$ .

   (2) $\mathbf 0_{2 \times 2}$ .

6. a. $2$ or $6$ . Choose $\lambda = 2$ .

   b. $\begin{pmatrix}1 & 1\\
   3 & 3\end{pmatrix}$ , $(1, -1)$ .

   c. $A \vec x = (2, -2) = \lambda \vec x$ .

7. (1) False.

   (2) True.

   (3) True.

   (4) True.

8. $B: \R^{n \times n}$ , $B_{i, j} = \begin{cases} (A^\mathrm T_{i, j})^{-1} & A^\mathrm T_{i, j} \ne 0 \\ 0 & \text{otherwise} \end{cases}$ .

9. a. 18.

   b. $\frac{n^2(n+1)}{2}$ .

   c. 52s.

## Optional

1. (1) $\frac{1}{n - 1} J_{n \times n} - \mathbf 1_n$ , where $J$ is matrix of ones.

   (2) $A^{-1}: \R^{n \times n}$ , $A^{-1}_{i, j} = \begin{cases} 1 & i = j \\ -a & j = i + 1 \\ 0 & \text{otherwise} \end{cases}$ .

2. $X_{i, j} = \begin{cases} 1 & i \le j \\ 0 & \text{otherwise} \end{cases}$ .

3. **Proof**

   Let $C = (\mathbf 1_n - AB)^{-1}$ .

   $$
   \begin{align*}
   (\mathbf 1_m - BA) (\mathbf 1_m + BCA ) \\
   &= \mathbf 1_m + BCA - BA - BABCA \\
   &= \mathbf 1_m - BA + B (CA - ABCA) \\
   &= \mathbf 1_m - BA + B (C - ABC) A \\
   &= \mathbf 1_m - BA + B (\mathbf 1_n - AB) C A \\
   &= \mathbf 1_m - BA + BA \\
   &= \mathbf 1_m
   \end{align*}
   $$

   $\square$ .

4. a. $E_1 = \begin{pmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -2 & 0 & 1 \end{pmatrix}$ , $E_2 = \begin{pmatrix}1 & 0 & 0\\
   0 & 1 & 0\\
   0 & 1 & 1\end{pmatrix}$ .

   b. $M_1 = \begin{pmatrix}1 & 0 & 0\\
   2 & 1 & 0\\
   2 & 0 & 1\end{pmatrix}$ , $M_2 = \begin{pmatrix}1 & 0 & 0\\
   0 & 1 & 0\\
   0 & \mathop{-}1 & 1\end{pmatrix}$ , $U = \begin{pmatrix}1 & 2 & 3\\
   0 & 2 & 1\\
   0 & 0 & \mathop{-}1\end{pmatrix}$ .

   c. $L = \begin{pmatrix}1 & 0 & 0\\
   2 & 1 & 0\\
   2 & \mathop{-}1 & 1\end{pmatrix}$ , $U = \begin{pmatrix}1 & 2 & 3\\
   0 & 2 & 1\\
   0 & 0 & \mathop{-}1\end{pmatrix}$ .

   d. $L = \begin{pmatrix}1 & 0 & 0\\
   2 & 1 & 0\\
   2 & \mathop{-}1 & 1\end{pmatrix}$ , $D = \begin{pmatrix}1 & 0 & 0\\
   0 & 2 & 0\\
   0 & 0 & \mathop{-}1\end{pmatrix}$ , $U = \begin{pmatrix}1 & 2 & 3\\
   0 & 1 & \frac{1}{2}\\
   0 & 0 & 1\end{pmatrix}$ .

5. (a) $\mathbf 1_n$ .

   (b) $\frac{1}{n} J_{n \times n}$ , where $J$ is matrix of ones.

6. **Proof**

   $$
   \begin{align*}
   (AB)_{i, j} \\
   & = A_{i, *} \cdot B_{*, j} \\
   & = \sum_{k = 1}^{n} A_{i, k} B_{k, j} \\
   & \le s \sum_{k = 1}^{n} B_{k, j} \\
   & \le sr
   \end{align*}
   $$

   $\square$ .

7. a. **Proof**

   If all entries of $A^m$ are less than or equal to $r^m$ , according to 6., since $A^{m + 1} = A^m A$ , then we have $s = r^m$ and $r = r$ , and $A^{m + 1}_{i, j} \le r^m \cdot r = r^{m + 1} \space \forall i, j: \N^* \le n$ .

   The result holds for $n = 1$ .

   By induction $A^m_{i, j} \le r^m \space \forall i, j: \N^* \le n \space \forall m: \N^*$ $\square$ .

   b. **Proof**

   By a

   $$
   0 \le \lim_{m \to +\infty} A^m_{i, j}
   \le \lim_{m \to +\infty} r^m = 0
   \space \forall i, j: \N^* \le n \space \forall m: \N^*
   $$

   Therefore $\lim_{m \to +\infty} A^m_{i, j} = \mathbf 0_{n \times n}$ $\square$ .

   c. **Proof**

   $$
   \begin{align*}
   \left( \sum_{i: \N} A^i \right)_{i, j} \\
   & = \sum_{k: \N} A^k_{i, j} \\
   & \le \sum_{k: \N} r^k \\
   & = \frac{1}{1-r} \space \forall i, j: \N^* \le n
   \end{align*}
   $$

   Converges since the series is positive $\square$ .

   d.

   $$
   \begin{align*}
   (\mathbf 1_n - A) \sum_{i = 0}^{m} A^i \\
   & = \sum_{i = 0}^{m} A^i - \sum_{i = 1}^{m + 1} A^i \\
   & = \mathbf 1_n - A^{m + 1}
   \end{align*}
   $$

   **Proof** Therefore, by b

   $$
   \lim_{m \to +\infty}
   (\mathbf 1_n - A) \sum_{i = 0}^{m} A^i
   = \mathbf 1_n - \mathbf 0_{n \times n} = \mathbf 1_n
   $$

   And $(\mathbf 1_n - A)^{-1} = \sum_{i = 0}^{m} A^i$ by definition $\square$ .
