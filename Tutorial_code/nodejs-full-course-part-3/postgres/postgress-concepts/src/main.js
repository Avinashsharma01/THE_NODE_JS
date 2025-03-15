const {
  countPostsByUser,
  averagePostsPerUser,
} = require("./concepts/aggregation");
const {
  insertUser,
  createUsersTable,
  fetchAllUsers,
  updateUserInfo,
  deleteInfo,
} = require("./concepts/basic-queries");
const {
  getUsersWhere,
  getSortedUsers,
  getPaginatedUsers,
} = require("./concepts/filtering-sorting");
const {
  getUsersWithPosts,
  getAllUsersAndTheirPosts,
} = require("./concepts/joins");
const { createPostsTable, insertNewPost } = require("./concepts/relationships");

//test basic queries
async function testBasicQueries() {
  try {
    await createUsersTable();
    // Insert new users
    await insertUser("Zxy", "zxy@gmail.com");
    await insertUser("John Doe", "john@gmail.com");
    await insertUser("Travis Mclaren", "travis123@gmail.com");
    await insertUser("Jennifer Lopez", "jennifer@gmail.com");
    await insertUser("Zayn Malik", "zaynmalik@gmail.com");
    console.log("All users");
    const allUsers = await fetchAllUsers();
    console.log(allUsers);
    const updatedUser = await updateUserInfo(
      "Sangam Mukherjee",
      "raja@gmail.com"
    );
    console.log(updatedUser);

    const deletedUser = await deleteInfo("Sangam Mukherjee");
    console.log(deletedUser);
  } catch (e) {
    console.error("Error", error);
  }
}

async function testFilterAndSortQueries() {
  try {
    //get users with a username whose username starting with z
    // const zFilteredUsers = await getUsersWhere("username LIKE 'Z%'");
    // console.log(zFilteredUsers);

    // const sortedUsers = await getSortedUsers("created_at", "ASC");
    // console.log(sortedUsers);

    const paginatedUsers = await getPaginatedUsers(2, 1);
    console.log("paginatedUsers", paginatedUsers);
  } catch (e) {
    console.error("Error", error);
  }
}

async function testRelationshipQueries() {
  try {
    // await createPostsTable();

    await insertNewPost("Second post", "This is my second post", 3);
    await insertNewPost("Third post", "Tecond post", 4);
  } catch (e) {
    console.error("Error", error);
  }
}

async function testJoinQueries() {
  try {
    // const usersWithPosts = await getUsersWithPosts();

    // console.log(usersWithPosts);

    const allUsersWithAllPosts = await getAllUsersAndTheirPosts();
    console.log(allUsersWithAllPosts);
  } catch (e) {
    console.error(e);
  }
}

async function testAggregateQuerise() {
  try {
    // const postCount = await countPostsByUser();
    // console.log(postCount);

    const averagePostsPerUserInfo = await averagePostsPerUser();
    console.log(averagePostsPerUserInfo);
  } catch (e) {
    console.error(e);
  }
}

async function testAllQueries() {
  //   await testBasicQueries();
  //   await testFilterAndSortQueries();
  // await testRelationshipQueries();

  // await testJoinQueries();
  await testAggregateQuerise();
}

testAllQueries();
