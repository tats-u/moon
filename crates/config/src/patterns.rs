use once_cell::sync::Lazy;
pub use regex::{Captures, Regex};

macro_rules! pattern {
    ($name:ident, $regex:literal) => {
        pub static $name: Lazy<regex::Regex> = Lazy::new(|| Regex::new($regex).unwrap());
    };
}

// Environment variables

pattern!(ENV_VAR, "\\$([A-Z0-9_]+)"); // $ENV_VAR
pattern!(ENV_VAR_DISTINCT, "^\\$([A-Z0-9_]+)$"); // $ENV_VAR
pattern!(ENV_VAR_GLOB_DISTINCT, "^\\$([A-Z0-9_*]+)$"); // $ENV_*
pattern!(
    ENV_VAR_SUBSTITUTE,
    "(?:\\$\\{(?P<name1>[A-Z0-9_]+)(?P<flag1>[!?]{1})?\\})|(?:\\$(?P<name2>[A-Z0-9_]+)(?P<flag2>[!?]{1})?)"
); // $ENV_VAR, ${ENV_VAR}
pattern!(
    ENV_VAR_SUBSTITUTE_STRICT,
    "\\$\\{(?P<name>[A-Z0-9_]+)(?P<flag>[!?]{1})?\\}"
); // ${ENV_VAR}

// Task tokens

pattern!(TOKEN_FUNC, "@([a-z]+)\\(([0-9A-Za-z_-]+)\\)");
pattern!(TOKEN_FUNC_DISTINCT, "^@([a-z]+)\\(([0-9A-Za-z_-]+)\\)$");
pattern!(
    TOKEN_VAR,
    "\\$(language|projectAlias|projectChannel|projectName|projectOwner|projectRoot|projectSource|projectStack|projectType|project|target|taskPlatform|taskType|task|workspaceRoot|timestamp|datetime|date|time)"
);
pattern!(
    TOKEN_VAR_DISTINCT,
    "^\\$(language|projectAlias|projectChannel|projectName|projectOwner|projectRoot|projectSource|projectStack|projectType|project|target|taskPlatform|taskType|task|workspaceRoot|timestamp|datetime|date|time)$"
);
