// Reference dataset of common conditions mapped to ICD-10-CM codes.
// This is a curated subset for lookup convenience — always verify against
// the current CMS ICD-10-CM manual before clinical or billing use.

const icd10Data = [
  { name: "Essential (primary) hypertension", aliases: ["high blood pressure", "hypertension", "htn"], code: "I10", description: "Chronic elevated blood pressure with no identifiable secondary cause.", category: "Cardiovascular" },
  { name: "Atrial fibrillation, unspecified", aliases: ["afib", "irregular heartbeat"], code: "I48.91", description: "Irregular, often rapid heart rhythm originating in the atria.", category: "Cardiovascular" },
  { name: "Congestive heart failure, unspecified", aliases: ["heart failure", "chf"], code: "I50.9", description: "The heart is unable to pump enough blood to meet the body's needs.", category: "Cardiovascular" },
  { name: "Atherosclerotic heart disease of native coronary artery", aliases: ["coronary artery disease", "cad", "ischemic heart disease"], code: "I25.10", description: "Narrowing of the coronary arteries due to plaque buildup, without angina.", category: "Cardiovascular" },
  { name: "Acute myocardial infarction, unspecified", aliases: ["heart attack", "mi"], code: "I21.9", description: "Sudden loss of blood flow to part of the heart muscle, causing tissue damage.", category: "Cardiovascular" },
  { name: "Cerebral infarction, unspecified", aliases: ["stroke", "ischemic stroke", "cva"], code: "I63.9", description: "Death of brain tissue due to interrupted blood supply.", category: "Cardiovascular" },
  { name: "Deep vein thrombosis, unspecified extremity", aliases: ["dvt", "blood clot leg"], code: "I82.409", description: "A blood clot forming in a deep vein, most often in the leg.", category: "Cardiovascular" },
  { name: "Hyperlipidemia, unspecified", aliases: ["high cholesterol"], code: "E78.5", description: "Elevated levels of lipids (cholesterol and/or triglycerides) in the blood.", category: "Cardiovascular" },

  { name: "Type 2 diabetes mellitus without complications", aliases: ["diabetes", "type 2 diabetes", "t2dm"], code: "E11.9", description: "A chronic condition affecting how the body processes blood sugar, typically insulin resistance.", category: "Endocrine" },
  { name: "Type 1 diabetes mellitus without complications", aliases: ["type 1 diabetes", "t1dm", "juvenile diabetes"], code: "E10.9", description: "An autoimmune condition in which the pancreas produces little or no insulin.", category: "Endocrine" },
  { name: "Hypothyroidism, unspecified", aliases: ["underactive thyroid", "low thyroid"], code: "E03.9", description: "The thyroid gland does not produce enough thyroid hormone.", category: "Endocrine" },
  { name: "Hyperthyroidism, unspecified", aliases: ["overactive thyroid"], code: "E05.90", description: "The thyroid gland produces excess thyroid hormone.", category: "Endocrine" },
  { name: "Obesity, unspecified", aliases: ["overweight"], code: "E66.9", description: "Excess body fat that increases the risk of related health conditions.", category: "Endocrine" },
  { name: "Polycystic ovary syndrome", aliases: ["pcos"], code: "E28.2", description: "A hormonal disorder causing enlarged ovaries with small cysts and irregular cycles.", category: "Endocrine" },
  { name: "Gout, unspecified", aliases: ["gouty arthritis"], code: "M10.9", description: "A form of arthritis caused by excess uric acid crystals in a joint.", category: "Endocrine" },

  { name: "Asthma, unspecified, uncomplicated", aliases: ["asthma"], code: "J45.909", description: "A chronic condition causing airway inflammation and narrowing, leading to wheezing and breathlessness.", category: "Respiratory" },
  { name: "Chronic obstructive pulmonary disease, unspecified", aliases: ["copd", "emphysema"], code: "J44.9", description: "A group of progressive lung diseases that cause breathing difficulty and airflow blockage.", category: "Respiratory" },
  { name: "Pneumonia, unspecified organism", aliases: ["pneumonia"], code: "J18.9", description: "Infection that inflames the air sacs in one or both lungs.", category: "Respiratory" },
  { name: "Acute bronchitis, unspecified", aliases: ["bronchitis"], code: "J20.9", description: "Inflammation of the bronchial tubes, usually following a viral infection.", category: "Respiratory" },
  { name: "Acute upper respiratory infection, unspecified", aliases: ["uri", "upper respiratory infection"], code: "J06.9", description: "An infection affecting the nose, throat, or airways, usually viral.", category: "Respiratory" },
  { name: "Acute nasopharyngitis", aliases: ["common cold", "cold"], code: "J00", description: "A mild viral infection of the nose and throat.", category: "Respiratory" },
  { name: "Influenza due to unidentified influenza virus", aliases: ["flu", "influenza"], code: "J11.1", description: "A contagious viral respiratory illness causing fever, body aches, and cough.", category: "Respiratory" },
  { name: "COVID-19", aliases: ["coronavirus", "sars-cov-2"], code: "U07.1", description: "Respiratory illness caused by infection with SARS-CoV-2.", category: "Respiratory" },
  { name: "Chronic sinusitis, unspecified", aliases: ["sinusitis", "sinus infection"], code: "J32.9", description: "Long-standing inflammation of the sinus lining, often with congestion and facial pressure.", category: "Respiratory" },
  { name: "Allergic rhinitis, unspecified", aliases: ["hay fever", "seasonal allergies"], code: "J30.9", description: "Nasal inflammation triggered by an allergic response to airborne particles.", category: "Respiratory" },
  { name: "Obstructive sleep apnea (adult) (pediatric)", aliases: ["sleep apnea", "osa"], code: "G47.33", description: "Repeated pauses in breathing during sleep caused by airway obstruction.", category: "Respiratory" },

  { name: "Gastro-esophageal reflux disease without esophagitis", aliases: ["gerd", "acid reflux", "heartburn"], code: "K21.9", description: "Stomach acid repeatedly flows back into the esophagus, irritating its lining.", category: "Gastrointestinal" },
  { name: "Irritable bowel syndrome, unspecified", aliases: ["ibs"], code: "K58.9", description: "A functional bowel disorder causing abdominal pain, bloating, and altered bowel habits.", category: "Gastrointestinal" },
  { name: "Crohn's disease, unspecified", aliases: ["crohns"], code: "K50.90", description: "A chronic inflammatory bowel disease that can affect any part of the digestive tract.", category: "Gastrointestinal" },
  { name: "Ulcerative colitis, unspecified", aliases: ["colitis"], code: "K51.90", description: "A chronic inflammatory bowel disease limited to the colon and rectum lining.", category: "Gastrointestinal" },
  { name: "Peptic ulcer disease, unspecified", aliases: ["stomach ulcer", "peptic ulcer"], code: "K27.9", description: "An open sore that develops on the lining of the stomach or upper small intestine.", category: "Gastrointestinal" },
  { name: "Calculus of gallbladder", aliases: ["gallstones", "cholelithiasis"], code: "K80.20", description: "Hardened deposits of digestive fluid that form in the gallbladder.", category: "Gastrointestinal" },
  { name: "Acute appendicitis, unspecified", aliases: ["appendicitis"], code: "K35.80", description: "Inflammation of the appendix, typically requiring urgent surgical removal.", category: "Gastrointestinal" },
  { name: "Celiac disease", aliases: ["gluten intolerance"], code: "K90.0", description: "An immune reaction to gluten that damages the small intestine lining.", category: "Gastrointestinal" },

  { name: "Migraine, unspecified, not intractable, without status migrainosus", aliases: ["migraine", "migraines"], code: "G43.909", description: "A neurological condition causing recurrent, often severe headaches with associated symptoms.", category: "Neurological" },
  { name: "Epilepsy, unspecified, not intractable, without status epilepticus", aliases: ["epilepsy", "seizure disorder"], code: "G40.909", description: "A neurological disorder marked by recurrent, unprovoked seizures.", category: "Neurological" },
  { name: "Parkinson's disease", aliases: ["parkinsons"], code: "G20", description: "A progressive nervous system disorder affecting movement, often with tremor.", category: "Neurological" },
  { name: "Alzheimer's disease, unspecified", aliases: ["alzheimers", "dementia"], code: "G30.9", description: "A progressive neurodegenerative disease and the most common cause of dementia.", category: "Neurological" },
  { name: "Multiple sclerosis", aliases: ["ms"], code: "G35", description: "An autoimmune disease damaging the protective covering of nerve fibers in the CNS.", category: "Neurological" },
  { name: "Cerebral palsy, unspecified", aliases: ["cerebral palsy", "cp"], code: "G80.9", description: "A group of disorders affecting movement and posture, caused by early brain development issues.", category: "Neurological" },
  { name: "Insomnia, unspecified", aliases: ["insomnia", "trouble sleeping"], code: "G47.00", description: "Persistent difficulty falling asleep or staying asleep.", category: "Neurological" },
  { name: "Chronic pain syndrome", aliases: ["chronic pain"], code: "G89.4", description: "Persistent pain lasting beyond normal healing time, often affecting daily function.", category: "Neurological" },

  { name: "Major depressive disorder, single episode, unspecified", aliases: ["depression", "mdd"], code: "F32.9", description: "A mood disorder causing persistent sadness and loss of interest in activities.", category: "Mental Health" },
  { name: "Generalized anxiety disorder", aliases: ["anxiety", "gad"], code: "F41.1", description: "Persistent, excessive worry about everyday matters that is difficult to control.", category: "Mental Health" },
  { name: "Bipolar disorder, unspecified", aliases: ["bipolar", "manic depression"], code: "F31.9", description: "A mood disorder involving alternating episodes of depression and mania or hypomania.", category: "Mental Health" },
  { name: "Schizophrenia, unspecified", aliases: ["schizophrenia"], code: "F20.9", description: "A chronic psychiatric disorder affecting thinking, perception, and behavior.", category: "Mental Health" },
  { name: "Attention-deficit hyperactivity disorder, unspecified type", aliases: ["adhd", "add"], code: "F90.9", description: "A neurodevelopmental condition affecting attention, impulse control, and activity level.", category: "Mental Health" },
  { name: "Autism spectrum disorder", aliases: ["autism", "asd"], code: "F84.0", description: "A developmental condition affecting communication, behavior, and social interaction.", category: "Mental Health" },

  { name: "Osteoarthritis, unspecified site", aliases: ["osteoarthritis", "oa", "arthritis"], code: "M19.90", description: "Degeneration of joint cartilage causing pain and stiffness, typically with age.", category: "Musculoskeletal" },
  { name: "Rheumatoid arthritis, unspecified", aliases: ["rheumatoid arthritis", "ra"], code: "M06.9", description: "An autoimmune disease causing chronic inflammation of the joints.", category: "Musculoskeletal" },
  { name: "Osteoporosis without current pathological fracture", aliases: ["osteoporosis"], code: "M81.0", description: "Loss of bone density that makes bones fragile and prone to fracture.", category: "Musculoskeletal" },
  { name: "Low back pain, unspecified", aliases: ["back pain", "lower back pain"], code: "M54.50", description: "Pain localized to the lower back, with a wide range of possible causes.", category: "Musculoskeletal" },
  { name: "Fibromyalgia", aliases: ["fibromyalgia"], code: "M79.7", description: "A chronic condition causing widespread musculoskeletal pain and fatigue.", category: "Musculoskeletal" },

  { name: "Chronic kidney disease, unspecified", aliases: ["ckd", "kidney disease"], code: "N18.9", description: "A gradual loss of kidney function over time.", category: "Genitourinary" },
  { name: "Urinary tract infection, site not specified", aliases: ["uti", "bladder infection"], code: "N39.0", description: "An infection in any part of the urinary system, most often the bladder.", category: "Genitourinary" },
  { name: "Benign prostatic hyperplasia without lower urinary tract symptoms", aliases: ["bph", "enlarged prostate"], code: "N40.0", description: "Non-cancerous enlargement of the prostate gland, common with age.", category: "Genitourinary" },
  { name: "Erectile dysfunction, unspecified", aliases: ["ed", "erectile dysfunction"], code: "N52.9", description: "Persistent inability to achieve or maintain an erection sufficient for intercourse.", category: "Genitourinary" },
  { name: "Endometriosis, unspecified", aliases: ["endometriosis"], code: "N80.9", description: "Tissue similar to the uterine lining grows outside the uterus, causing pain.", category: "Genitourinary" },
  { name: "Menopausal and other perimenopausal disorders", aliases: ["menopause"], code: "N95.1", description: "Symptoms associated with the hormonal transition at the end of menstrual cycles.", category: "Genitourinary" },

  { name: "Anemia, unspecified", aliases: ["anemia"], code: "D64.9", description: "A condition marked by a lack of healthy red blood cells to carry oxygen.", category: "Hematologic" },
  { name: "Iron deficiency anemia, unspecified", aliases: ["iron deficiency"], code: "D50.9", description: "Anemia caused by insufficient iron to produce hemoglobin.", category: "Hematologic" },
  { name: "Leukemia, unspecified", aliases: ["leukemia"], code: "C95.90", description: "A cancer of blood-forming tissue that affects white blood cell production.", category: "Hematologic" },

  { name: "Malignant neoplasm of breast, unspecified", aliases: ["breast cancer"], code: "C50.919", description: "A cancer that forms in the cells of the breast.", category: "Oncology" },
  { name: "Malignant neoplasm of bronchus or lung, unspecified", aliases: ["lung cancer"], code: "C34.90", description: "A cancer that begins in the cells of the lungs.", category: "Oncology" },
  { name: "Malignant neoplasm of colon, unspecified", aliases: ["colon cancer", "colorectal cancer"], code: "C18.9", description: "A cancer that develops in the cells lining the large intestine.", category: "Oncology" },
  { name: "Malignant neoplasm of prostate", aliases: ["prostate cancer"], code: "C61", description: "A cancer that forms in the tissue of the prostate gland.", category: "Oncology" },
  { name: "Malignant melanoma, unspecified", aliases: ["melanoma", "skin cancer"], code: "C43.9", description: "A serious form of skin cancer that develops in pigment-producing cells.", category: "Oncology" },

  { name: "Chronic viral hepatitis C", aliases: ["hepatitis c", "hep c"], code: "B18.2", description: "A long-term liver infection caused by the hepatitis C virus.", category: "Infectious Disease" },
  { name: "Chronic viral hepatitis B", aliases: ["hepatitis b", "hep b"], code: "B18.1", description: "A long-term liver infection caused by the hepatitis B virus.", category: "Infectious Disease" },
  { name: "Human immunodeficiency virus disease", aliases: ["hiv", "aids"], code: "B20", description: "A virus that attacks the immune system, potentially progressing to AIDS.", category: "Infectious Disease" },
  { name: "Tuberculosis, unspecified", aliases: ["tb", "tuberculosis"], code: "A15.9", description: "A bacterial infection primarily affecting the lungs, spread through the air.", category: "Infectious Disease" },
  { name: "Malaria, unspecified", aliases: ["malaria"], code: "B54", description: "A mosquito-borne parasitic disease causing fever and flu-like illness.", category: "Infectious Disease" },
  { name: "Varicella without complication", aliases: ["chickenpox", "varicella"], code: "B01.9", description: "A highly contagious viral infection causing an itchy, blistering rash.", category: "Infectious Disease" },
  { name: "Measles, uncomplicated", aliases: ["measles"], code: "B05.9", description: "A highly contagious viral infection causing fever and a characteristic rash.", category: "Infectious Disease" },

  { name: "Psoriasis, unspecified", aliases: ["psoriasis"], code: "L40.9", description: "A chronic autoimmune condition causing rapid skin cell buildup and scaly patches.", category: "Dermatologic" },
  { name: "Atopic dermatitis, unspecified", aliases: ["eczema", "atopic dermatitis"], code: "L20.9", description: "A chronic condition causing dry, itchy, and inflamed skin.", category: "Dermatologic" },
  { name: "Acne vulgaris", aliases: ["acne"], code: "L70.0", description: "A skin condition causing pimples, most common during adolescence.", category: "Dermatologic" },

  { name: "Otitis media, unspecified", aliases: ["ear infection", "otitis media"], code: "H66.90", description: "Inflammation or infection of the middle ear.", category: "ENT / Eye" },
  { name: "Conjunctivitis, unspecified", aliases: ["pink eye", "conjunctivitis"], code: "H10.9", description: "Inflammation of the membrane covering the white of the eye and inner eyelid.", category: "ENT / Eye" },
  { name: "Unspecified cataract", aliases: ["cataract", "cataracts"], code: "H26.9", description: "Clouding of the eye's natural lens that impairs vision.", category: "ENT / Eye" },
  { name: "Unspecified glaucoma", aliases: ["glaucoma"], code: "H40.9", description: "A group of eye conditions that damage the optic nerve, often from high eye pressure.", category: "ENT / Eye" },

  { name: "Down syndrome, unspecified", aliases: ["down syndrome", "trisomy 21"], code: "Q90.9", description: "A genetic condition caused by an extra copy of chromosome 21.", category: "Congenital" },
];

export default icd10Data;
