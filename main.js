// ========================
// Project Data
// ========================
const projects = [
  {
    id: 1,
    title: "출연연재정정보시스템 운영·유지관리",
    period: "2025.01 ~ 현재",
    client: "경제인문사회연구회",
    category: "운영·유지관리",
    status: "진행중",
    tags: ["JAVA", "Spring", "Oracle"]
  },
  {
    id: 2,
    title: "출연연재정정보시스템 운영·유지관리",
    period: "2024.01 ~ 2024.12",
    client: "경제인문사회연구회",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JAVA", "Spring", "Oracle"]
  },
  {
    id: 3,
    title: "출연연재정정보시스템(NFIS) 확산 사업",
    period: "2023.04 ~ 2023.08",
    client: "경제인문사회연구회",
    category: "구축",
    status: "완료",
    tags: ["JAVA", "Spring"]
  },
  {
    id: 4,
    title: "출연연재정정보시스템 운영·유지관리",
    period: "2022.12 ~ 2023.12",
    client: "경제인문사회연구회",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JAVA", "Spring"]
  },
  {
    id: 5,
    title: "출연연 재정정보시스템 운영유지관리사업",
    period: "2021.06 ~ 2022.12",
    client: "경제인문사회연구회",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JAVA"]
  },
  {
    id: 6,
    title: "출연연 재정정보시스템 5차구축사업",
    period: "2020.04 ~ 2021.05",
    client: "경제인문사회연구회",
    category: "구축",
    status: "완료",
    tags: ["JAVA"]
  },
  {
    id: 7,
    title: "대전 교육앱 구축 사업",
    period: "2019.09 ~ 2020.01",
    client: "대전광역시교육청",
    category: "구축",
    status: "완료",
    tags: ["JavaScript", "React Native"]
  },
  {
    id: 8,
    title: "2019년도 모바일 경기교육수첩 유지관리",
    period: "2019.03 ~ 2019.12",
    client: "경기도교육정보기록원",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JavaScript"]
  },
  {
    id: 9,
    title: "2019년도 모바일 경기교육수첩 유지관리 계약",
    period: "2019.01 ~ 2019.03",
    client: "경기도교육정보기록원",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JavaScript"]
  },
  {
    id: 10,
    title: "중앙소방학교 홈페이지 개편",
    period: "2019.01 ~ 2019.03",
    client: "중앙소방학교",
    category: "홈페이지",
    status: "완료",
    tags: ["JavaScript"]
  },
  {
    id: 11,
    title: "대전학생교육문화원 홈페이지 재구축 사업",
    period: "2018.07 ~ 2018.11",
    client: "대전학생교육문화원",
    category: "홈페이지",
    status: "완료",
    tags: ["JAVA", "JavaScript"]
  },
  {
    id: 12,
    title: "순천대학교 홈페이지 재구축 사업",
    period: "2018.07 ~ 2019.03",
    client: "순천대학교",
    category: "홈페이지",
    status: "완료",
    tags: ["JAVA"]
  },
  {
    id: 13,
    title: "경상남도교육청 학교홈페이지 응용프로그램 개편",
    period: "2018.06 ~ 2018.12",
    client: "경상남도교육연구정보원",
    category: "홈페이지",
    status: "완료",
    tags: ["JAVA", "JavaScript"]
  },
  {
    id: 14,
    title: "2018년도 모바일 경기교육수첩 유지관리",
    period: "2018.06 ~ 2018.12",
    client: "경기도교육정보기록원",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JavaScript"]
  },
  {
    id: 15,
    title: "해양경찰청 홈페이지 구축",
    period: "2018.02 ~ 2018.05",
    client: "해양경찰청",
    category: "홈페이지",
    status: "완료",
    tags: ["JAVA", "JavaScript"]
  },
  {
    id: 16,
    title: "ITS Navi 시스템 구축 사업",
    period: "2017.12 ~ 2018.01",
    client: "한국해양대학교",
    category: "구축",
    status: "완료",
    tags: ["JAVA"]
  },
  {
    id: 17,
    title: "인천광역시교직원수련원 홈페이지 개편",
    period: "2017.10 ~ 2017.12",
    client: "인천교직원수련원",
    category: "홈페이지",
    status: "완료",
    tags: ["JAVA", "JavaScript"]
  },
  {
    id: 18,
    title: "경상북도교육연구원 학교홈페이지 재구축(2차)",
    period: "2017.07 ~ 2017.09",
    client: "경상북도교육연구원",
    category: "홈페이지",
    status: "완료",
    tags: ["JAVA"]
  },
  {
    id: 19,
    title: "강원교육과학정보원 학교통합홈페이지 응용SW 유지관리",
    period: "2017.02 ~ 2017.06",
    client: "강원교육과학정보원",
    category: "운영·유지관리",
    status: "완료",
    tags: ["JAVA", "JavaScript"]
  }
];

// ========================
// Render Projects
// ========================
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  let filtered = projects;
  if (filter !== 'all') {
    filtered = projects.filter(p => p.category.includes(filter));
  }

  filtered.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'card-item scroll-hidden group bg-slate-700/40 border border-slate-600 rounded-xl overflow-hidden hover:border-[#6366f1]/50 hover:shadow-xl hover:shadow-[#6366f1]/10 hover:-translate-y-1 transition-all duration-300';
    card.setAttribute('data-category', project.category);
    card.setAttribute('data-index', index);
    card.style.transitionDelay = `${index * 50}ms`;

    let categoryColor = 'from-[#6366f1] to-[#a855f7]';
    if (project.category === '홈페이지') {
      categoryColor = 'from-emerald-500 to-teal-500';
    } else if (project.category === '구축') {
      categoryColor = 'from-sky-500 to-blue-500';
    }

    card.innerHTML = `
      <div class="h-1 bg-gradient-to-r ${categoryColor}"></div>
      <div class="p-6 flex flex-col gap-3 h-full">
        <span class="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 w-fit">
          ${project.category}
        </span>
        <h3 class="text-base font-semibold leading-snug line-clamp-2 group-hover:text-[#6366f1] transition-colors">
          ${project.title}
        </h3>
        <div class="flex items-center gap-2 text-sm text-slate-400">
          📅 ${project.period}
          <span class="ml-auto text-xs px-2 py-1 rounded-full ${project.status === '진행중' ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/30 text-slate-400'}">
            ${project.status}
          </span>
        </div>
        <div class="flex items-center gap-2 text-sm text-slate-400">
          🏢 ${project.client}
        </div>
        <div class="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-700">
          ${project.tags.map(tag => `<span class="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  observeElements();
}

// ========================
// Filter Handler
// ========================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-[#6366f1]', 'border-[#6366f1]', 'text-white');
      b.classList.add('border-slate-600', 'text-slate-300');
    });
    btn.classList.add('active', 'bg-[#6366f1]', 'border-[#6366f1]', 'text-white');
    btn.classList.remove('border-slate-600', 'text-slate-300');

    const filter = btn.getAttribute('data-filter');
    renderProjects(filter);
  });
});

// ========================
// Scroll Animation
// ========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('scroll-hidden');
      entry.target.classList.add('scroll-visible');
    }
  });
}, observerOptions);

function observeElements() {
  document.querySelectorAll('.scroll-hidden').forEach(el => {
    observer.observe(el);
  });
}

// ========================
// Skill Bars Animation
// ========================
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-bar').forEach(bar => {
  skillObserver.observe(bar);
});

// ========================
// Navigation Active State
// ========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('text-[#6366f1]', 'font-semibold');
        link.classList.add('text-[#f1f5f9]');
      });
      const activeLink = document.querySelector(`[data-section="${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('text-[#6366f1]', 'font-semibold');
        activeLink.classList.remove('text-[#f1f5f9]');
      }
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => navObserver.observe(section));

// ========================
// Mobile Menu
// ========================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('nav')) {
    mobileMenu.classList.remove('open');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    mobileMenu.classList.remove('open');
  }
});

// ========================
// Copy Email
// ========================
document.getElementById('copy-email-btn').addEventListener('click', () => {
  const email = 'yhoo13579@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const feedback = document.getElementById('copy-feedback');
    feedback.classList.remove('hidden');
    setTimeout(() => {
      feedback.classList.add('hidden');
    }, 2000);
  }).catch(() => {
    alert('이메일: ' + email);
  });
});

// ========================
// Footer Year
// ========================
document.getElementById('year').textContent = new Date().getFullYear();

// ========================
// Initial Render
// ========================
renderProjects();

// ========================
// Hero Entrance Animation
// ========================
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('loaded');
});
