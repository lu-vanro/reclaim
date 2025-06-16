import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ckylmvyawdwxwkcamsoj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreWxtdnlhd2R3eHdrY2Ftc29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNDM1NzMsImV4cCI6MjA2NTYxOTU3M30.U1WT-fHRz3cvMiB6IuGR-bOyRGOuPPw11iIFe36qKe0'
);

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  if (!signupForm) return;

  signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) return;

    const { data, error } = await supabase
      .from('mailing_list')
      .insert([{ name, email }]);

    if (error) {
      alert('Error signing up: ' + error.message);
    } else {
      window.location.href = 'mailing-list-thank-you.html';
    }
  });
});