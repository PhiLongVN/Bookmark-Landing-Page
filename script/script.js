/* ============================================ */
/*                    TOGGLE                    */
/* ============================================ */
const toggle = document.querySelector('.head-toggle');
const head = document.querySelector('.head');

toggle.addEventListener('click', handleToggle);

function handleToggle() {
  head.classList.toggle('active');
}

window.onscroll = () => {
  head.classList.remove('active');
};

/* ============================================ */
/*                    CHOOSE                    */
/* ============================================ */
const title = document.querySelectorAll('.feature-title span');
const titleImg = document.querySelector('.detail-img');
const titleText = document.querySelector('.detail-text');

title.forEach((element) => {
  element.addEventListener('click', handleChoose);
});

function handleChoose(e) {
  let target = e.target;

  switch (target.dataset.id) {
    case '1':
      titleImg.innerHTML = `<img src="./images/illustration-features-tab-1.svg" alt="" />`;
      titleText.innerHTML = `<h2>Bookmark in one click</h2>
                            <p>
                            Organize your bookmarks however you like. Our simple
                            drag-and-drop interface gives you complete control over how
                            you manage your favourite sites.
                            </p>
                            <button>More Info</button>`;
      handleClass(target);
      break;

    case '2':
      titleImg.innerHTML = `<img src="./images/illustration-features-tab-2.svg" alt="" />`;
      titleText.innerHTML = `<h2>Intelligent search</h2>
                              <p>
                              Our powerful search feature will help you find saved
                            sites in no time at all. No need to trawl through all
                             of your bookmarks.
                              </p>
                              <button>More Info</button>`;
      handleClass(target);
      break;

    case '3':
      titleImg.innerHTML = `<img src="./images/illustration-features-tab-3.svg" alt="" />`;
      titleText.innerHTML = `<h2> Share your bookmarks </h2>
                            <p>
                            InfoEasily share your bookmarks and collections
                            with others. Create a shareable link that you can
                             send at the click of a button.
                            </p>
                            <button>More Info</button>`;
      handleClass(target);
      break;
  }
}

function handleClass(target) {
  title.forEach((key) => {
    key.classList.remove('active');
  });

  target.classList.add('active');
}

/* ============================================ */
/*                  ACCORDITION                  */
/* ============================================ */

const accorBLock = document.querySelectorAll('.accor-block');

accorBLock.forEach((element) => {
  element.onclick = () => {
    element.classList.toggle('active');
  };
});

/* ============================================ */
/*                     EMAIL                    */
/* ============================================ */
const form = document.querySelector('.foot-email');
const email = document.querySelector('.email-input');

form.onsubmit = (e) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let dem = 0;
  let a = email.value;

  // nếu email NULL
  if (a == '' || a == null) {
    email.parentNode.classList.add('active');
    dem++;
  }
  // nếu email có cú pháp không hợp lệ
  else if (!a.match(re)) {
    email.parentNode.classList.add('active');
    dem++;
  }

  if (dem > 0) {
    e.preventDefault();
  }

  error(email);
};

error = (set) => {
  set.onclick = () => {
    set.parentNode.classList.remove('active');
    set.parentNode.classList.remove('active2');
  };
};
