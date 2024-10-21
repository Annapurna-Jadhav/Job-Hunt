document.addEventListener('DOMContentLoaded', function() {
    const companyGrid = document.querySelector('.company-grid');
    const jobsGrid = document.querySelector('.jobs-grid');
    const skillsGrid = document.querySelector('.skills-grid');
    const showMoreCompaniesButton = document.getElementById('show-more-companies');
    const showMoreJobsButton = document.getElementById('show-more-jobs');
    const showMoreSkillsButton = document.getElementById('show-more-skills');
    const modal = document.getElementById('company-details-modal');
    const companyDetails = document.getElementById('company-details');

    // Dummy data for companies, jobs, and skills
    const companies = [
        { name: 'Microsoft', image: 'microsoft.png', jobTitle: 'Software Engineer', location: 'Redmond', ratings: 4.5 },
        { name: 'Google', image: 'google.png', jobTitle: 'Data Scientist', location: 'Mountain View', ratings: 4.7 },
        { name: 'Uber', image: 'uber.png', jobTitle: 'frontend developer', location: 'new york', ratings: 4.8},
        { name: 'Amazon', image: 'Amazon.png', jobTitle: 'UX Designer', location: 'london', ratings: 4.6 },
        { name: 'Adobe', image: 'Adobe.png', jobTitle: 'gamedeveloper', location: 'america', ratings: 4.8 },
        { name: 'apple', image: 'apple.png', jobTitle: 'UX Designer', location: 'india', ratings: 4.7 },
        { name: 'ola', image: 'ola.png', jobTitle: 'data scientist', location: 'San Jose', ratings: 4.6 },
        { name: 'Spotify', image: 'Spotify.png', jobTitle: 'UX Designer', location: 'canada', ratings: 4.6 },
        { name: 'Netflix', image: 'Netflix.png', jobTitle: 'UX Designer', location: 'paris', ratings: 3.6 },
        
    ];

    const jobs = [
        'Software Engineer', 'Data Analyst', 'Product Manager', 'UX Designer', 'DevOps Engineer',
        'QA Tester', 'Project Manager', 'Business Analyst', 'System Administrator', 'Network Engineer'
    ];

    const skills = [
        'JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Go', 'Rust'
    ];

    // Function to populate grid with items
    function populateGrid(grid, items, limit) {
        grid.innerHTML = '';
        items.slice(0, limit).forEach(item => {
            const div = document.createElement('div');
            div.className = grid.classList.contains('company-grid') ? 'company' : grid.classList.contains('jobs-grid') ? 'job' : 'skill';
            div.textContent = typeof item === 'string' ? item : item.name;
            div.addEventListener('click', () => showCompanyDetails(item.name));
            grid.appendChild(div);
        });
    }

    // Initial population of grids
    populateGrid(companyGrid, companies, 5);
    populateGrid(jobsGrid, jobs, 5);
    populateGrid(skillsGrid, skills, 5);

    // Show more function
    showMoreCompaniesButton.addEventListener('click', function() {
        populateGrid(companyGrid, companies, companies.length);
        showMoreCompaniesButton.style.display = 'none';
    });

    showMoreJobsButton.addEventListener('click', function() {
        populateGrid(jobsGrid, jobs, jobs.length);
        showMoreJobsButton.style.display = 'none';
    });

    showMoreSkillsButton.addEventListener('click', function() {
        populateGrid(skillsGrid, skills, skills.length);
        showMoreSkillsButton.style.display = 'none';
    });

    function showCompanyDetails(companyName) {
        const company = companies.find(c => c.name === companyName);
        if (company) {
            companyDetails.innerHTML = `
                <img src="${company.image}" alt="${company.name}" style="width:100px;height:100px;">
                <h3>${company.name}</h3>
                <p>Job Title: ${company.jobTitle}</p>
                <p>Location: ${company.location}</p>
                <p>Ratings: ${company.ratings}</p>
                <button onclick="viewFullDetails('${company.name}')">View Full Details</button>
            `;
            modal.style.display = 'block';
        }
    }

    window.viewFullDetails = function(companyName) {
        const company = companies.find(c => c.name === companyName);
        if (company) {
            companyDetails.innerHTML += `
                <p>Average Package: $120,000</p>
                <p>Experience: 5+ years</p>
                <p>Job Type: Full-Time</p>
                <p>About the Company: Founded by John Doe, CEO Jane Smith. Other locations include New York, London.</p>
                <button onclick="applyNow()">Apply Now</button>
            `;
        }
    }

    window.applyNow = function() {
        window.open('apply.html', '_blank');
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
    
    
});
