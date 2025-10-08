// Test script to verify Supabase connection
// Run this in your browser console

// Test the connection directly
fetch('https://hqsiusbbjwzboytkgreb.supabase.co/rest/v1/products?select=*&limit=1', {
  method: 'GET',
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhxc2l1c2Jiand6Ym95dGtncmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NjUyNzcsImV4cCI6MjA3NTE0MTI3N30.uPBGjXVS7SOun1XhK7GW6EBP-DHtC0QdVwGUjdCA5eI',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhxc2l1c2Jiand6Ym95dGtncmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NjUyNzcsImV4cCI6MjA3NTE0MTI3N30.uPBGjXVS7SOun1XhK7GW6EBP-DHtC0QdVwGUjdCA5eI',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Response status:', response.status);
  if (response.ok) {
    console.log('✅ Table exists and is accessible!');
    return response.json();
  } else {
    console.log('❌ Table does not exist or is not accessible');
    return response.text();
  }
})
.then(data => {
  console.log('Response data:', data);
})
.catch(error => {
  console.error('❌ Error:', error);
});
