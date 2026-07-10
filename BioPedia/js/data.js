// ===== BioPedia Content Database =====
// theory is now an ARRAY of points (each string = one bullet point)
// To add a new SUBJECT: copy one block below and change everything.
// To add a new TOPIC: add a new object to its "topics" array.
// image: put diagram file inside assets/images/ and write its filename here.

const subjectsData = [
  {
    id: "biochemistry",
    icon: "⚗️",
    name: "Biochemistry",
    tagline: "The chemistry of life",
    topics: [
      {
        title: "What is Biochemistry?",
        theory: [
          "Biochemistry is the study of chemical processes occurring within living organisms.",
          "It bridges biology and chemistry, explaining life at the molecular level.",
          "It covers how molecules like carbohydrates, lipids, proteins, and nucleic acids are built, broken down, and used to sustain life.",
          "It explains processes ranging from digestion to how cells generate energy and replicate DNA."
        ],
        image: ""
      },
      {
        title: "Carbohydrates",
        theory: [
          "Carbohydrates are organic molecules made of carbon, hydrogen, and oxygen, typically in a 1:2:1 ratio.",
          "They serve as the primary energy source for most living cells.",
          "Monosaccharides are simple sugars, e.g. glucose and fructose.",
          "Disaccharides are two sugars joined together, e.g. sucrose.",
          "Polysaccharides are long chains, e.g. starch, glycogen, and cellulose.",
          "Glucose is central to metabolism — broken down during cellular respiration to release energy as ATP."
        ],
        image: "assets/images/carbohydrate-structure.png"
      },
      {
        title: "Lipids",
        theory: [
          "Lipids are hydrophobic (water-repelling) molecules including fats, oils, phospholipids, and steroids.",
          "Fats and oils provide long-term energy storage.",
          "Phospholipids form the structural basis of cell membranes.",
          "Steroids such as testosterone and estrogen act as signaling molecules (hormones).",
          "A triglyceride consists of a glycerol backbone attached to three fatty acid chains."
        ],
        image: "assets/images/lipid-structure.png"
      },
      {
        title: "Proteins and Amino Acids",
        theory: [
          "Proteins are large molecules built from chains of amino acids — 20 types occur in living organisms.",
          "The amino acid sequence determines a protein's unique 3D shape, which determines its function.",
          "Proteins perform many roles: enzymes (speed up reactions), structural proteins (e.g. collagen), transport proteins (e.g. hemoglobin), and antibodies.",
          "Primary structure: the amino acid sequence.",
          "Secondary structure: local folding patterns like alpha helices and beta sheets.",
          "Tertiary structure: the overall 3D shape of a single protein chain.",
          "Quaternary structure: multiple protein subunits combined together."
        ],
        image: "assets/images/protein-structure-levels.png"
      },
      {
        title: "Enzymes",
        theory: [
          "Enzymes are biological catalysts — proteins that speed up chemical reactions without being consumed.",
          "Each enzyme has an active site that binds a specific substrate, like a lock and key.",
          "Enzymes lower the activation energy needed for a reaction, increasing its speed dramatically.",
          "Enzyme activity is affected by temperature, pH, and inhibitors, which can slow or block function."
        ],
        image: "assets/images/enzyme-active-site.png"
      },
      {
        title: "ATP — The Energy Currency",
        theory: [
          "ATP (adenosine triphosphate) is the molecule cells use to store and transfer energy for immediate use.",
          "It consists of adenosine attached to three phosphate groups.",
          "Breaking the bond between the second and third phosphate releases energy and forms ADP.",
          "Cells constantly regenerate ATP from ADP using energy obtained from food, mainly via cellular respiration."
        ],
        image: "assets/images/atp-adp-cycle.png"
      }
    ]
  },
  {
    id: "molecular-biology-genetics",
    icon: "🧬",
    name: "Molecular Biology & Genetics",
    tagline: "The molecular basis of heredity",
    topics: [
      {
        title: "DNA Structure",
        theory: [
          "DNA (deoxyribonucleic acid) is a double helix made of two strands of nucleotides.",
          "Each nucleotide has a sugar, a phosphate group, and one of four nitrogenous bases: Adenine, Thymine, Guanine, Cytosine.",
          "Adenine pairs with Thymine, and Guanine pairs with Cytosine, held together by hydrogen bonds."
        ],
        image: "assets/images/dna-structure.png"
      },
      {
        title: "DNA Replication",
        theory: [
          "DNA replication is how a cell copies its DNA before dividing, giving each new cell a complete genetic set.",
          "The double helix unwinds and separates into two strands, each acting as a template.",
          "DNA polymerase reads each template strand and builds a new complementary strand by matching bases.",
          "Each new DNA molecule contains one original strand and one new strand — called 'semi-conservative' replication."
        ],
        image: "assets/images/dna-replication.png"
      },
      {
        title: "From Gene to Protein: Transcription",
        theory: [
          "Transcription is the first step of gene expression — copying a gene's DNA into messenger RNA (mRNA).",
          "RNA polymerase binds to the DNA at the start of a gene and synthesizes a complementary mRNA strand.",
          "RNA uses the base Uracil instead of Thymine.",
          "The completed mRNA carries the genetic message toward the ribosomes for translation."
        ],
        image: "assets/images/transcription-process.png"
      },
      {
        title: "From Gene to Protein: Translation",
        theory: [
          "Translation is how ribosomes read mRNA and assemble a chain of amino acids to build a protein.",
          "The mRNA sequence is read in groups of three bases called codons, each specifying an amino acid or a stop signal.",
          "Transfer RNA (tRNA) molecules bring the correct amino acid to the ribosome, matching anticodon to codon.",
          "The ribosome links amino acids together into a growing polypeptide chain."
        ],
        image: "assets/images/translation-process.png"
      },
      {
        title: "Genes, Alleles, and Chromosomes",
        theory: [
          "A gene is a DNA segment containing instructions for a protein or functional RNA molecule.",
          "Genes are arranged along chromosomes — organized structures of DNA and protein in the nucleus.",
          "Many genes exist in different versions called alleles (e.g. brown vs blue eye-color alleles).",
          "Humans are diploid — they carry two copies of each chromosome, one from each parent."
        ],
        image: "assets/images/gene-chromosome-allele.png"
      },
      {
        title: "Mendelian Genetics",
        theory: [
          "Gregor Mendel discovered the basic laws of inheritance through pea plant experiments in the 1860s.",
          "Law of Segregation: each organism carries two alleles per trait, which separate during gamete formation.",
          "Law of Independent Assortment: alleles for different traits are typically inherited independently.",
          "These laws explain dominant/recessive inheritance patterns, often shown using Punnett squares."
        ],
        image: "assets/images/punnett-square.png"
      },
      {
        title: "Mutations",
        theory: [
          "A mutation is a change in an organism's DNA sequence.",
          "Mutations can occur spontaneously during replication, or be caused by mutagens like UV radiation or chemicals.",
          "Mutations can be harmful, neutral, or occasionally beneficial.",
          "Mutations are the ultimate source of genetic variation — the raw material evolution acts upon."
        ],
        image: ""
      }
    ]
  },
  {
    id: "cell-biology-signaling",
    icon: "🧫",
    name: "Cell Biology & Signaling",
    tagline: "The basic unit of life and how cells communicate",
    topics: [
      {
        title: "Introduction to the Cell",
        theory: [
          "The cell is the smallest structural and functional unit of life.",
          "Every organism, from a single bacterium to a giant tree, is built from cells.",
          "Unicellular organisms consist of one cell; multicellular organisms like humans have trillions.",
          "All cells share basic features: a membrane, genetic material (DNA), and cytoplasm."
        ],
        image: "assets/images/cell-overview.png"
      },
      {
        title: "Cell Theory",
        theory: [
          "All living organisms are composed of one or more cells.",
          "The cell is the basic unit of structure and organization in organisms.",
          "Cells arise from pre-existing cells through cell division.",
          "Developed in the 1830s-1850s by Schleiden, Schwann, and Virchow, this remains central to modern biology."
        ],
        image: ""
      },
      {
        title: "Prokaryotic vs Eukaryotic Cells",
        theory: [
          "Prokaryotic cells (bacteria, archaea) are small and simple, lacking a true nucleus.",
          "Their genetic material floats freely in a region called the nucleoid.",
          "They lack membrane-bound organelles.",
          "Eukaryotic cells (plants, animals, fungi, protists) are larger and more complex.",
          "Eukaryotic cells contain a true nucleus and membrane-bound organelles like mitochondria, ER, and Golgi apparatus."
        ],
        image: "assets/images/prokaryote-vs-eukaryote.png"
      },
      {
        title: "The Cell Membrane",
        theory: [
          "The cell membrane (plasma membrane) forms the cell's outer boundary and controls what enters/exits.",
          "It is composed mainly of a phospholipid bilayer.",
          "Hydrophilic heads face outward, hydrophobic tails face inward.",
          "Embedded proteins act as channels, pumps, and receptors.",
          "Described by the 'fluid mosaic model' — a flexible sheet studded with a mosaic of proteins."
        ],
        image: "assets/images/cell-membrane-bilayer.png"
      },
      {
        title: "The Nucleus",
        theory: [
          "The nucleus is the control center of the eukaryotic cell, housing its DNA.",
          "Surrounded by a double membrane (nuclear envelope) with nuclear pores regulating molecule movement.",
          "DNA is organized with proteins into chromatin, which condenses into chromosomes during cell division.",
          "The nucleolus, inside the nucleus, produces ribosomal RNA."
        ],
        image: "assets/images/nucleus-structure.png"
      },
      {
        title: "Mitochondria — The Powerhouse",
        theory: [
          "Mitochondria produce most of the cell's usable energy (ATP) through cellular respiration.",
          "They have a double-membrane structure: smooth outer membrane, folded inner membrane (cristae).",
          "Cristae increase surface area for energy-producing reactions.",
          "Mitochondria contain their own DNA and can replicate independently.",
          "This supports the endosymbiotic theory — mitochondria originated from ancient free-living bacteria."
        ],
        image: "assets/images/mitochondria-structure.png"
      },
      {
        title: "Endoplasmic Reticulum and Golgi Apparatus",
        theory: [
          "The endoplasmic reticulum (ER) is a membrane network for synthesis and transport.",
          "Rough ER (studded with ribosomes) synthesizes proteins for secretion or membranes.",
          "Smooth ER (no ribosomes) is involved in lipid synthesis and detoxification.",
          "The Golgi apparatus modifies, sorts, and packages proteins/lipids into vesicles for delivery."
        ],
        image: "assets/images/er-golgi.png"
      },
      {
        title: "Ribosomes — Protein Factories",
        theory: [
          "Ribosomes are made of ribosomal RNA (rRNA) and proteins.",
          "They synthesize proteins through a process called translation.",
          "They read mRNA and assemble amino acids into a specific sequence to form a protein.",
          "Free ribosomes make proteins used within the cell; ribosomes on rough ER make proteins for secretion or membranes."
        ],
        image: "assets/images/ribosome-structure.png"
      }
    ]
  },
  {
    id: "botany",
    icon: "🌿",
    name: "Botany",
    tagline: "The science of plants",
    topics: [
      {
        title: "What is Botany?",
        theory: [
          "Botany is the branch of biology dedicated to the study of plants.",
          "It covers plant structure, growth, reproduction, metabolism, disease, and evolutionary relationships.",
          "Plants produce oxygen through photosynthesis and form the base of most food chains.",
          "Botany spans everything from single-celled algae to towering trees."
        ],
        image: ""
      },
      {
        title: "Plant Cell Structure",
        theory: [
          "Plant cells share basic eukaryotic features but have unique structures animal cells lack.",
          "A rigid cell wall made of cellulose surrounds the cell membrane, providing shape and support.",
          "A large central vacuole stores water, nutrients, and waste, and maintains internal pressure (turgor).",
          "Chloroplasts are organelles containing chlorophyll, the site of photosynthesis.",
          "Plasmodesmata are small channels connecting adjacent plant cells, allowing direct communication."
        ],
        image: "assets/images/plant-cell-structure.png"
      },
      {
        title: "Photosynthesis",
        theory: [
          "Photosynthesis is the process by which plants convert light energy into chemical energy (glucose).",
          "It occurs mainly in chloroplasts, using the green pigment chlorophyll to absorb sunlight.",
          "The light-dependent reactions occur in the thylakoid membranes, producing ATP and NADPH, and releasing oxygen.",
          "The light-independent reactions (Calvin cycle) occur in the stroma, using ATP and NADPH to build glucose from CO2.",
          "Overall equation: carbon dioxide + water + light energy → glucose + oxygen."
        ],
        image: "assets/images/photosynthesis-diagram.png"
      },
      {
        title: "Plant Tissue Systems",
        theory: [
          "Plants are organized into three main tissue systems.",
          "Dermal tissue forms the outer protective covering (epidermis) of the plant.",
          "Vascular tissue transports water, minerals, and sugars — made of xylem (water transport) and phloem (sugar transport).",
          "Ground tissue fills the space between dermal and vascular tissue, supporting photosynthesis, storage, and structural support."
        ],
        image: "assets/images/plant-tissue-types.png"
      },
      {
        title: "Roots, Stems, and Leaves",
        theory: [
          "Roots anchor the plant, absorb water and minerals, and often store food.",
          "Stems support the plant body, transport materials between roots and leaves, and may store nutrients.",
          "Leaves are the primary site of photosynthesis, with a broad, flat shape to maximize light absorption.",
          "Stomata, tiny pores usually on leaf undersides, regulate gas exchange and water loss through transpiration."
        ],
        image: "assets/images/root-stem-leaf-diagram.png"
      },
      {
        title: "Plant Reproduction",
        theory: [
          "Plants reproduce both sexually (via flowers, seeds) and asexually (via runners, bulbs, cuttings).",
          "In flowering plants, pollen (male gametes) fertilizes ovules (female gametes) to form seeds.",
          "Pollination can occur via wind, water, or animal pollinators like bees and birds.",
          "After fertilization, the ovule develops into a seed, and the surrounding ovary often develops into a fruit."
        ],
        image: "assets/images/flower-reproduction-diagram.png"
      },
      {
        title: "Plant Hormones",
        theory: [
          "Plant hormones are chemical messengers that regulate growth, development, and responses to the environment.",
          "Auxins promote cell elongation and are involved in phototropism (growth toward light).",
          "Gibberellins promote stem elongation and seed germination.",
          "Cytokinins promote cell division and delay aging (senescence).",
          "Ethylene is a gas hormone that triggers fruit ripening and leaf drop."
        ],
        image: ""
      }
    ]
  },
  {
    id: "zoology",
    icon: "🦋",
    name: "Zoology",
    tagline: "The study of animals",
    topics: [
      {
        title: "What is Zoology?",
        theory: [
          "Zoology is the branch of biology that studies animals.",
          "It covers animal anatomy, physiology, behavior, classification, and evolutionary history.",
          "It spans microscopic organisms to the largest whales.",
          "It examines how animals move, feed, reproduce, and interact with their environments."
        ],
        image: ""
      },
      {
        title: "Animal Classification",
        theory: [
          "Animals are classified using a hierarchical system: Kingdom, Phylum, Class, Order, Family, Genus, Species.",
          "The Animal Kingdom is divided into invertebrates (no backbone) and vertebrates (with backbone).",
          "Major invertebrate phyla include Porifera (sponges), Cnidaria (jellyfish), Mollusca (snails, octopuses), Arthropoda (insects, crustaceans), and Annelida (segmented worms).",
          "Vertebrates are classified into fish, amphibians, reptiles, birds, and mammals."
        ],
        image: "assets/images/animal-classification-chart.png"
      },
      {
        title: "Invertebrates",
        theory: [
          "Invertebrates make up about 97% of all animal species on Earth.",
          "Arthropods (insects, spiders, crustaceans) have jointed limbs and a hard exoskeleton made of chitin.",
          "Mollusks (snails, clams, octopuses) typically have a soft body, often protected by a shell.",
          "Cnidarians (jellyfish, corals, sea anemones) have simple body plans with stinging cells called cnidocytes.",
          "Annelids (earthworms, leeches) have segmented bodies that aid in movement and specialization of body regions."
        ],
        image: "assets/images/invertebrate-groups.png"
      },
      {
        title: "Vertebrates",
        theory: [
          "Vertebrates are animals with a backbone (vertebral column) protecting the spinal cord.",
          "Fish live in water, breathe through gills, and most are ectothermic (cold-blooded).",
          "Amphibians (frogs, salamanders) typically live part of their life in water and part on land.",
          "Reptiles (snakes, lizards, turtles) have dry, scaly skin and lay shelled eggs.",
          "Birds have feathers, lay hard-shelled eggs, and most are capable of flight.",
          "Mammals have hair/fur, produce milk to feed their young, and are endothermic (warm-blooded)."
        ],
        image: "assets/images/vertebrate-classes.png"
      },
      {
        title: "Animal Body Systems",
        theory: [
          "The digestive system breaks down food into nutrients the body can absorb and use.",
          "The circulatory system transports blood, oxygen, and nutrients throughout the body.",
          "The respiratory system enables gas exchange — taking in oxygen and releasing carbon dioxide.",
          "The nervous system coordinates responses to stimuli using the brain, spinal cord, and nerves.",
          "The skeletal and muscular systems together provide support, protection, and movement."
        ],
        image: "assets/images/animal-body-systems.png"
      },
      {
        title: "Animal Behavior",
        theory: [
          "Animal behavior is the study of how and why animals act as they do.",
          "Innate behaviors are instinctive and present from birth, without needing to be learned (e.g. reflexes).",
          "Learned behaviors develop through experience, such as habituation or conditioning.",
          "Social behaviors include communication, cooperation, and hierarchy within groups (e.g. ant colonies, wolf packs).",
          "Migration and hibernation are behavioral adaptations that help animals survive seasonal changes."
        ],
        image: ""
      }
    ]
  },
  {
    id: "ecology",
    icon: "🌍",
    name: "Ecology",
    tagline: "Organisms and their environment",
    topics: [
      {
        title: "What is Ecology?",
        theory: [
          "Ecology is the study of how living organisms interact with each other and their environment.",
          "It examines relationships at multiple levels: individuals, populations, communities, ecosystems.",
          "It helps explain food webs, energy flow, nutrient cycles.",
          "It also studies the impact of human activity on natural systems."
        ],
        image: ""
      },
      {
        title: "Levels of Ecological Organization",
        theory: [
          "An organism is a single individual living being.",
          "A population is a group of the same species living in the same area at the same time.",
          "A community consists of all the different populations (species) interacting in a given area.",
          "An ecosystem includes a community plus the non-living (abiotic) environment it interacts with, like soil, water, and climate.",
          "The biosphere is the sum of all ecosystems on Earth."
        ],
        image: "assets/images/ecological-organization-levels.png"
      },
      {
        title: "Food Chains and Food Webs",
        theory: [
          "A food chain shows a linear sequence of who-eats-whom in an ecosystem.",
          "Producers (plants, algae) capture energy from sunlight via photosynthesis, forming the base of the chain.",
          "Primary consumers (herbivores) eat producers; secondary consumers (carnivores) eat primary consumers.",
          "Decomposers (bacteria, fungi) break down dead organisms, recycling nutrients back into the ecosystem.",
          "A food web is a more realistic network showing multiple interconnected food chains."
        ],
        image: "assets/images/food-web-diagram.png"
      },
      {
        title: "Energy Flow and Trophic Levels",
        theory: [
          "Energy flows through an ecosystem in one direction, starting from the sun.",
          "Each feeding position in a food chain is called a trophic level.",
          "Only about 10% of energy is transferred from one trophic level to the next (the '10% rule'); the rest is lost mainly as heat.",
          "This is why food chains rarely have more than 4-5 trophic levels, and why top predators are relatively rare."
        ],
        image: "assets/images/energy-pyramid.png"
      },
      {
        title: "Nutrient Cycles",
        theory: [
          "Unlike energy, nutrients are recycled repeatedly through ecosystems.",
          "The carbon cycle moves carbon between the atmosphere, living organisms, oceans, and rocks/fossil fuels.",
          "The nitrogen cycle converts atmospheric nitrogen into forms usable by plants, largely via nitrogen-fixing bacteria.",
          "The water cycle moves water between the atmosphere, land, and oceans through evaporation, precipitation, and runoff."
        ],
        image: "assets/images/nitrogen-cycle-diagram.png"
      },
      {
        title: "Ecosystem Interactions",
        theory: [
          "Competition occurs when two organisms compete for the same limited resource.",
          "Predation is when one organism (predator) hunts and eats another (prey).",
          "Symbiosis describes close, long-term interactions between different species.",
          "Mutualism benefits both species; commensalism benefits one without harming the other; parasitism benefits one while harming the other."
        ],
        image: ""
      }
    ]
  },
  {
    id: "evolution",
    icon: "🐒",
    name: "Evolution",
    tagline: "Change in species over time",
    topics: [
      {
        title: "What is Evolution?",
        theory: [
          "Evolution is the process by which populations of organisms change over successive generations.",
          "Key mechanisms: natural selection, genetic mutation, gene flow, and genetic drift.",
          "First formally described by Charles Darwin.",
          "All species share common ancestry, branching over billions of years into today's diversity of life."
        ],
        image: ""
      },
      {
        title: "Natural Selection",
        theory: [
          "Natural selection is the process where organisms with traits better suited to their environment survive and reproduce more successfully.",
          "It requires variation — individuals in a population must differ in their traits.",
          "Favorable traits are passed to offspring more often, gradually becoming more common in the population.",
          "Charles Darwin proposed this mechanism in 1859 in his book 'On the Origin of Species,' based on observations from his voyage on the HMS Beagle."
        ],
        image: "assets/images/natural-selection-diagram.png"
      },
      {
        title: "Evidence for Evolution",
        theory: [
          "Fossil records show a chronological sequence of gradual changes in species over millions of years.",
          "Comparative anatomy reveals homologous structures — similar bone structures in different species (e.g. human arm, bat wing, whale fin) that suggest common ancestry.",
          "Molecular biology shows that DNA and protein similarities between species reflect evolutionary relatedness.",
          "Biogeography explains species distribution patterns based on the movement of continents and populations over time."
        ],
        image: "assets/images/homologous-structures-diagram.png"
      },
      {
        title: "Genetic Variation and Sources of Change",
        theory: [
          "Mutations introduce new genetic variation into a population.",
          "Gene flow occurs when individuals migrate between populations, exchanging genetic material.",
          "Genetic drift is random change in allele frequency, especially significant in small populations.",
          "Sexual reproduction shuffles existing genetic variation into new combinations through recombination."
        ],
        image: ""
      },
      {
        title: "Speciation",
        theory: [
          "Speciation is the process by which new, distinct species evolve from a common ancestor.",
          "Allopatric speciation occurs when populations are geographically separated and evolve independently.",
          "Sympatric speciation occurs without geographic separation, often through behavioral or reproductive differences.",
          "Over time, accumulated genetic differences can lead to reproductive isolation, where populations can no longer interbreed."
        ],
        image: "assets/images/speciation-types-diagram.png"
      },
      {
        title: "Common Ancestry and the Tree of Life",
        theory: [
          "All living organisms are thought to share a common ancestor that lived billions of years ago.",
          "Phylogenetic trees are diagrams that show evolutionary relationships between species based on shared characteristics.",
          "Species that share a more recent common ancestor are more closely related.",
          "This concept unifies all of biology, explaining both the diversity and the underlying similarity of life."
        ],
        image: "assets/images/phylogenetic-tree-diagram.png"
      }
    ]
  },
  {
    id: "developmental-biology",
    icon: "🥚",
    name: "Developmental Biology",
    tagline: "How organisms grow and develop",
    topics: [
      {
        title: "What is Developmental Biology?",
        theory: [
          "Developmental biology studies how organisms grow and develop from a single fertilized egg (zygote).",
          "It covers cell division, differentiation, and morphogenesis leading to a complete organism.",
          "It explores how genes control the timing and pattern of development.",
          "It also studies how errors in development can cause birth defects or disease."
        ],
        image: ""
      },
      {
        title: "Fertilization",
        theory: [
          "Fertilization is the fusion of a sperm cell and an egg cell to form a single-celled zygote.",
          "It combines genetic material from both parents, restoring the full (diploid) chromosome number.",
          "Fertilization triggers the zygote to begin rapid cell division.",
          "In many species, only one sperm is allowed to fertilize the egg, due to rapid changes in the egg's outer membrane after the first sperm enters."
        ],
        image: "assets/images/fertilization-diagram.png"
      },
      {
        title: "Cleavage and Blastula Formation",
        theory: [
          "Cleavage is a series of rapid cell divisions that occur after fertilization, without overall growth in size.",
          "It converts the large single-celled zygote into a multicellular ball of smaller cells called a blastula.",
          "The blastula often contains a fluid-filled cavity called the blastocoel.",
          "Cleavage patterns vary between species but generally set up the basic cell arrangement for later development."
        ],
        image: "assets/images/cleavage-blastula-diagram.png"
      },
      {
        title: "Gastrulation",
        theory: [
          "Gastrulation is the process where the blastula reorganizes into a multi-layered structure called the gastrula.",
          "This establishes the three primary germ layers: ectoderm, mesoderm, and endoderm.",
          "The ectoderm gives rise to skin and the nervous system.",
          "The mesoderm gives rise to muscle, bone, and the circulatory system.",
          "The endoderm gives rise to the digestive tract and associated organs."
        ],
        image: "assets/images/gastrulation-germ-layers.png"
      },
      {
        title: "Cell Differentiation",
        theory: [
          "Cell differentiation is the process by which unspecialized cells become specialized cell types.",
          "All cells in an organism generally contain the same DNA, but different genes are switched on or off in different cells.",
          "This selective gene expression allows cells to develop distinct structures and functions (e.g. muscle cells, nerve cells).",
          "Differentiation is guided by chemical signals and gene regulatory networks during development."
        ],
        image: ""
      },
      {
        title: "Stem Cells",
        theory: [
          "Stem cells are unspecialized cells capable of developing into different cell types.",
          "Totipotent stem cells (found briefly after fertilization) can form an entire organism, including supporting tissues.",
          "Pluripotent stem cells can form nearly all cell types of the body, but not supporting tissues like the placenta.",
          "Multipotent (adult) stem cells are more limited, typically forming a specific range of related cell types.",
          "Stem cells are heavily researched for their potential in regenerative medicine and treating diseases."
        ],
        image: "assets/images/stem-cell-potency-diagram.png"
      }
    ]
  },
  {
    id: "biotechnology",
    icon: "🧪",
    name: "Biotechnology",
    tagline: "Applying biology to technology",
    topics: [
      {
        title: "What is Biotechnology?",
        theory: [
          "Biotechnology uses living organisms, cells, or biological systems to develop products and technologies.",
          "Applications include genetically modified crops and industrial enzymes.",
          "Medical applications include insulin production and gene therapy.",
          "Modern techniques include biofuels and CRISPR gene editing."
        ],
        image: ""
      },
      {
        title: "Recombinant DNA Technology",
        theory: [
          "Recombinant DNA technology involves combining DNA from different sources to create new genetic combinations.",
          "Restriction enzymes cut DNA at specific sequences, acting like molecular scissors.",
          "DNA ligase joins DNA fragments together, acting like molecular glue.",
          "A common application is inserting a human gene (e.g. for insulin) into bacteria, which then produce the protein in large quantities."
        ],
        image: "assets/images/recombinant-dna-diagram.png"
      },
      {
        title: "Polymerase Chain Reaction (PCR)",
        theory: [
          "PCR is a technique used to make millions of copies of a specific DNA segment quickly.",
          "It uses a heat-stable enzyme called Taq polymerase to repeatedly copy the target DNA.",
          "The process involves repeated cycles of heating (to separate DNA strands) and cooling (to allow copying).",
          "PCR is widely used in medical diagnostics, forensic science, and research."
        ],
        image: "assets/images/pcr-cycle-diagram.png"
      },
      {
        title: "CRISPR Gene Editing",
        theory: [
          "CRISPR-Cas9 is a gene-editing technology that allows precise changes to be made to DNA.",
          "It uses a guide RNA to direct the Cas9 enzyme to a specific location in the genome.",
          "Cas9 acts like molecular scissors, cutting the DNA at the targeted location.",
          "The cell's natural repair mechanisms can then be used to delete, insert, or modify genetic sequences.",
          "CRISPR has revolutionized research and holds promise for treating genetic diseases."
        ],
        image: "assets/images/crispr-cas9-diagram.png"
      },
      {
        title: "Genetically Modified Organisms (GMOs)",
        theory: [
          "A GMO is an organism whose genetic material has been altered using biotechnology.",
          "GM crops are often engineered for pest resistance, herbicide tolerance, or improved nutritional content.",
          "GM bacteria are used industrially to produce medicines like insulin and human growth hormone.",
          "GMOs remain a topic of public debate regarding safety, environmental impact, and regulation."
        ],
        image: ""
      },
      {
        title: "Cloning",
        theory: [
          "Cloning is the process of creating a genetically identical copy of an organism, cell, or DNA fragment.",
          "Reproductive cloning creates a whole new organism, as demonstrated by Dolly the sheep in 1996.",
          "Somatic cell nuclear transfer involves inserting the nucleus of a body cell into an egg cell that has had its own nucleus removed.",
          "Therapeutic cloning aims to produce cells or tissues for medical treatment, rather than a whole organism."
        ],
        image: "assets/images/somatic-cell-nuclear-transfer.png"
      }
    ]
  }
];