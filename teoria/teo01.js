// 1. Big O (La regla del pulgar)
//     Patrón: Buscar bucles anidados = O(n²). Recursión que parte a la mitad = O(log n).
//     Edge Case: El espacio también cuenta. Si creas un nuevo array del tamaño del input, es O(n) de espacio.

// O(n) - Lineal
function findMax(arr) {
  let max = -Infinity;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// O(log n) - Binary Search
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    // se salta la mitad cada vez
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// 2. HashMap vs Array (El dilema de la memoria)
//     Patrón: ¿Necesitas buscar por clave? → Map o Set. ¿Necesitas índice exacto y tamaño fijo? → Array.
//     Edge Case: En JS, {} y Map son O(1) promedio, pero si las claves son números grandes, usa new Array(n).fill(false) para un acceso directo por índice (más rápido).

// HashMap para contar frecuencias (O(n))
function countFreq(arr) {
  const map = new Map();
  for (let item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}
//const arr = [0,1,2,3,4,2,2,4,5,6,7,8]
// countFreq(arr)

// Array como HashMap (cuando el rango es conocido, ej: números 0-100)
function hasDuplicates(nums) {
  const seen = new Array(101).fill(false);
  for (let num of nums) {
    if (seen[num]) return true;
    seen[num] = true;
  }
  return false;
}

// 3. Stack / Queue (El orden importa)
//     Patrón: Stack = push/pop (LIFO). Queue = push/shift (FIFO, pero shift es O(n) en arrays, usa índice si puedes).
//     Edge Case: Para colas eficientes en JS, usa dos stacks o un LinkedList mental. Pero en exámenes, shift suele pasar si no es un bucle enorme.

// Stack: Paréntesis balanceados
function isValidParentheses(s) {
  const stack = [];
  const map = { '(': ')', '{': '}', '[': ']' };
  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (map[last] !== char) return false;
    }
  }
  return stack.length === 0;
}

// Queue: BFS básico (usando array con shift - aceptable)
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  while (queue.length) {
    const node = queue.shift(); // O(n) pero ok para ejercicios
    if (visited.has(node)) continue;
    visited.add(node);
    queue.push(...graph[node]);
  }
}

// 4. Two Pointers (El abrazo)
//     Patrón: Uno al inicio, otro al final (para sumas) o ambos al inicio (puntero lento/rápido).
//     Edge Case: Siempre chequea que left < right. Si se cruzan, termina.

// Suma de dos números en array ordenado (punteros extremos)
function twoSumSorted(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

// Eliminar duplicados en array ordenado (puntero lento/rápido)
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1; // nueva longitud
}

// 5. Sliding Window (La ventana corrediza)
//     Patrón: Ventana fija (tamaño K) o variable (crece hasta que se rompe la condición).
//     Edge Case: ¿Cuándo muevo el puntero izquierdo? Solo cuando la condición falla, mueve left hasta que se cumpla de nuevo.

// Ventana fija: Suma máxima de subarray de tamaño K
function maxSumFixed(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i]; // Corrimiento mágico
    max = Math.max(max, sum);
  }
  return max;
}

// Ventana variable: Subcadena más larga SIN repetir caracteres
function longestUniqueSubstr(s) {
  const set = new Set();
  let left = 0,
    maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// 6. Prefix Sums (La acumulada)
//     Patrón: prefix[i] = prefix[i-1] + arr[i]. Para suma de (i,j) → prefix[j] - prefix[i-1].
//     Edge Case: El truco TOP es usar un HashMap para guardar prefix sums y encontrar subarrays que sumen K en O(n).

// Subarray que suma K (con HashMap)
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1); // Para cuando el prefix completo suma K
  let sum = 0,
    count = 0;
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// 7. Binary Search (El que más falla en Toptal)
//     Patrón: Buscar en espacio ordenado.
//     Edge Case CRÍTICO: Define si usas <= o <. Mi regla fija: Usa while (left <= right) y siempre actualiza left = mid + 1 o right = mid - 1. Así evitas loops infinitos.

// Búsqueda estándar (con <=)
function search(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Buscar el primer elemento que cumple condición (lower_bound)
function firstBadVersion(n, isBad) {
  let left = 1,
    right = n;
  while (left < right) {
    // Aquí usamos < porque nos quedamos con el left
    const mid = Math.floor((left + right) / 2);
    if (isBad(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
}
