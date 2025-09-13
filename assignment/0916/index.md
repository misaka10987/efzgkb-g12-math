# 9/16 作业

Homework 3

1. (1) $\begin{pmatrix}25 & 0 & 0 & 0\\
   0 & 25 & 0 & 0\\
   0 & 0 & 1 & 0\\
   0 & 0 & 4 & 1\end{pmatrix}$ .

   (2) $\begin{pmatrix}{{a}^{4}} & 4 {{a}^{3}} & 6 {{a}^{2}}\\
   0 & {{a}^{4}} & 4 {{a}^{3}}\\
   0 & 0 & {{a}^{4}}\end{pmatrix}$ .

2. $\begin{pmatrix}3 & 0\\
   0 & 3\\
   3 & 0\\
   0 & 3\end{pmatrix}$ .

3. (1) False.

   (2) True.

   (3) False.

4. $PQ = \begin{pmatrix}0 & 1 & 0\\
   0 & 0 & 1\\
   1 & 0 & 0\end{pmatrix}$ .

   $QP = \begin{pmatrix}0 & 1 & 0\\
   0 & 0 & 1\\
   1 & 0 & 0\end{pmatrix}$ .

   $P^2 = \mathbf{1}_3$ .

5. $E=\begin{pmatrix}1 & 0 & 0 & 0\\
   \mathop{-}1 & 1 & 0 & 0\\
   0 & \mathop{-}1 & 1 & 0\\
   0 & 0 & \mathop{-}1 & 1\end{pmatrix}$ .

   $F = \begin{pmatrix}1 & 0 & 0 & 0\\
   \mathop{-}1 & 1 & 0 & 0\\
   0 & \mathop{-}1 & 1 & 0\\
   0 & 0 & \mathop{-}1 & 1\end{pmatrix}$ .

6. $M=ABAAB$ .

## Optional

1. (1) $M_{n \times n}$ , $M_{i,j}=\delta_{i,j-m}$ , 其中 $\delta$ 是 Kronecker 函数。

   (2) $M_{n \times n}$ , $M_{i,j}={m \choose j-i}a^{m-j+i}$ .

   (3) $\left( \begin{matrix} \cos m \theta & -\sin m \theta \\ \sin m \theta & \cos m \theta \end{matrix} \right)$ .

2. **证明**

   由 $AB=BA$ , 展开矩阵乘法

   $$
   A_{i,*} \cdot B_{*,j} = B_{i,*} \cdot A_{*,j}
   $$

   展开 $A$ 的定义

   $$
   (0, \cdots, d_i, \cdots, 0)
   \cdot B_{*,j}
   = (0, \cdots, d_j, \cdots, 0)
   \cdot B_{i,*}
   $$

   展开内积

   $$
   d_i B_{i,j} = d_j B_{i,j}
   $$

   当 $i \ne j$ 时，由题，$d_i \ne d_j$ , 则 $B_{i,j} = 0$ .

   $B_{i,j} = 0 \space \forall i \ne j$ , 则 $B$ 是对角矩阵 $\square$ .

3. **证明**

   由 $AB=BA$ , 展开矩阵乘法

   $$
   A_{i,*} \cdot B_{*,j} = B_{i,*} \cdot A_{*,j}
   $$

   展开内积

   $$
   \begin{equation}
   \sum_{k=1}^{n} A_{i,k} B_{k,j} = \sum_{k=1}^n B_{i,k} A_{k,j}
   \end{equation}
   $$

   由于 $B$ 是任意矩阵，对于任意 $x,y : \N, 1 \le x,y \le n$ , 令

   $$
   B'_{i,j}
   = \begin{cases}
   1 & (x,y) = (i,j) \\
   0 & \text{otherwise}
   \end{cases}
   $$

   并对于任意 $x,y$
   - 考虑 $(AB')_{x,y}$ .

     由 (1) , 展开 $B'$ 的定义

     $$
     A_{x,x} = A_{y,y}
     $$

     由于 $x,y$ 任意选取，这表明对角线上的所有元素相等。

   - 考虑 $(AB')_{x,v}$ , 其中 $v \ne y$ .

     由 (1) , 展开 $B'$ 的定义

     $$
     A_{y,v} = 0
     $$

     由于 $y,v$ 任意选取，这表明对于任意 $y \ne v$ , $A_{y,v} \ne 0$ .

     即 $A$ 是对角矩阵。

   既然，$A$ 可以表示成 $c \mathbf 1_{n}$ , 其中 $c$ 是 $A$ 相等的对角线元素 $\square$ .

4. **证明**
   $$
   \begin{align*}
   (AB-BA)^\mathrm T \\
   & = (AB)^\mathrm T - (BA)^\mathrm T \\
   & = B^\mathrm T A^\mathrm T - A^\mathrm T B^\mathrm T \\
   & = (-B)(-A) - (-A)(-B) \\
   & = - (AB - BA)
   \end{align*}
   $$
   $\square$ .
