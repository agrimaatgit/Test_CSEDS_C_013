// Define the initial product price
const productPrice = 799;

// Function to update the total price based on quantity
function updateTotalPrice() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = productPrice * quantity;
    document.querySelector('.total-price').textContent = `Total Price: Rs. ${totalPrice}`;
}

// Event listener for quantity input change
document.getElementById('quantity').addEventListener('input', updateTotalPrice);

// Event listener for Buy Now button click
document.getElementById('buyNowButton').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = productPrice * quantity;
    alert(`You added ${quantity} items to your cart for Rs. ${totalPrice}`);
});
