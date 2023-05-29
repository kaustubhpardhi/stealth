const client = require("../../config/dbConfig");

exports.saveSkills = async (req, res) => {
  const { skill, role, willing_role, user_id } = req.body;

  try {
    const query = `
      INSERT INTO skills (skill, role, willing_role, user_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [skill, role, willing_role, user_id];

    const result = await client.query(query, values);
    const savedSkill = result.rows[0];

    res.status(201).json({
      message: "Skill saved successfully",
      skill: savedSkill,
    });
  } catch (error) {
    console.error("Error saving skill:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.saveExperience = async (req, res) => {
  const {
    company_name,
    job_title,
    start_date,
    end_date,
    job_description,
    user_id,
  } = req.body;

  try {
    const query = `
      INSERT INTO experience (company_name, job_title, start_date, end_date, job_description, user_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [
      company_name,
      job_title,
      start_date,
      end_date,
      job_description,
      user_id,
    ];

    const result = await client.query(query, values);
    const savedExperience = result.rows[0];

    res.status(201).json({
      message: "Experience saved successfully",
      experience: savedExperience,
    });
  } catch (error) {
    console.error("Error saving experience:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.saveEducation = async (req, res) => {
  const { degree_name, college_name, start_date, end_date, user_id } = req.body;

  try {
    const query = `
        INSERT INTO education (degree_name, college_name, start_date, end_date, user_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
    const values = [degree_name, college_name, start_date, end_date, user_id];

    const result = await client.query(query, values);
    const savedEducation = result.rows[0];

    res.status(201).json({
      message: "Education saved successfully",
      education: savedEducation,
    });
  } catch (error) {
    console.error("Error saving education:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.savePreferences = async (req, res) => {
  const {
    job_seeking,
    job_type,
    job_location,
    company_size,
    desired_salary,
    user_id,
  } = req.body;

  try {
    const query = `
        INSERT INTO preferences (job_seeking, job_type, job_location, company_size, desired_salary, user_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `;
    const values = [
      job_seeking,
      job_type,
      job_location,
      company_size,
      desired_salary,
      user_id,
    ];

    const result = await client.query(query, values);
    const savedPreferences = result.rows[0];

    res.status(201).json({
      message: "Preferences saved successfully",
      preferences: savedPreferences,
    });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};