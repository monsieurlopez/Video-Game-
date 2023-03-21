
import { useState } from 'react';
import Swal from 'sweetalert2';
import 
  { playSound, soundHeal, soundVictoryHumans, soundVictoryDarkness, soundAttackArrow, soundFailArrow, soundAttackSword, soundFailMetal, soundAttackHammer, soundAttackSpear } 
from './sound';


Swal.fire({
  title: "Welcome to the game!",
  text: "Press Start Game button to enter the name of the players",
  confirmButtonText: "OK",
  width: "70%",
  padding: "1px",
  allowOutsideClick: false,
  allowEnterKey: false,
  allowEscapeKey: false,
  onBeforeOpen: () => {
    document.body.classList.add("blur-effect");
  },
  onClose: () => {
    document.body.classList.remove("blur-effect");
  },
});



export const LordOfTheRingsApp = () => {

    const [namePlayer, setNamePlayer] = useState("");
    const [currentTurn, setCurrentTurn] = useState(1);
  
    
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");
    const [info, setInfo] = useState("");
    const [info2, setInfo2] = useState("");
    const [game, setGame] = useState("");
    const [action, setAction] = useState("");
    const [action2, setAction2] = useState("");

   
    const [aragorn, setAragorn] = useState({
      name: "Aragorn",
      hp: 150,
      sp: 200,
      attackPower: 30,
    });
    const [legolas, setLegolas] = useState({
        name: "Legolas",
        hp: 120,
        sp: 200,
        attackPower: 40,
      });
    const [gandalf, setGandalf] = useState({
      name: "Gandalf",
      hp: 300,
      sp: 350,
      healPower: 35,
      recoverSp: 70,
    });
    const [troll, setTroll] = useState({
      name: "Troll",
      hp: 200,
      sp:175,
      attackPower: 45,
    });
    const [urukhai, setUrukhai] = useState({
      name: "Uruk-hai",
      hp: 150,
      sp: 200,
      attackPower: 35,
    });
    const [saruman, setSaruman] = useState({
      name: "Saruman",
      hp: 300,
      sp: 350,
      healPower: 35,
      recoverSp: 70,
    });

    


    
  // Team 1:
    const aragornAttackTroll = () => {
      playerExist();
      switchTurn();
      if (troll.hp <= 0){
         Swal.fire("The Troll is already dead, choose another target");
         teamWins(); 
      } else {
      if (aragorn.hp <= 0) {
        return setAction ("Aragorn is dead! 💀");
      }else {
      if (aragorn.sp <= 25) {
        return setAction ("Aragorn can't move");
      } else if (troll.hp <= 0){
         setAction ("The Troll is dead! 💀")
      } if (troll.hp <= 0 && urukhai.hp <= 0 && saruman.hp <= 0) {
        return Swal.fire(
          "Good job!",
          "Team 1 wins!",
          "success"
        )
        } else {
          let randomNumber = Math.random();
          if (randomNumber < 0.25){
            setAction ("Aragorn missed the attack");
            soundFailMetal();
            setAragorn((Aragorn) => {
              return {
              ...Aragorn,
              sp: Math.max(0, Aragorn.sp -25),
              };
          });
          }else {
            setAction ( "Aragorn attacks the Troll with his sword ⚔️" );
            soundAttackSword();
            setTroll((Troll) => {
                return {
                ...Troll,
                hp: Math.max(0, Troll.hp - aragorn.attackPower),
                };
            });
            setAragorn((Aragorn) => {
                return {
                ...Aragorn,
                sp: Math.max(0, Aragorn.sp -25),
                };
            });
            setResult(`${aragorn.name}, SP: ${aragorn.sp}`)
            setResult2(`${troll.name}, HP: ${troll.hp} ⚔️ ` );
          }
          }
          }
        }
        };

        const aragornAttackUrukhai = () => {
          playerExist();
          switchTurn();
          if (urukhai.hp <= 0){
             Swal.fire("The Uruk-hai is already dead, choose another target");
             teamWins(); 
          } else {
          if (aragorn.hp <= 0) {
            return setAction ("Aragorn is dead! 💀");
          }else {
          if (aragorn.sp <= 25) {
            return setAction ("Aragorn can't move");
          } else if (urukhai.hp <= 0){
             setAction ("The Uruk-hai is dead! 💀")
          } if (urukhai.hp <= 0 && troll.hp <= 0 && saruman.hp <= 0) {
            return Swal.fire(
              "Good job!",
              "Team 1 wins!",
              "success"
            )
            } else {
              let randomNumber = Math.random();
              if (randomNumber < 0.25){
                setAction ("Aragorn missed the attack");
                soundFailMetal();
                setAragorn((Aragorn) => {
                  return {
                  ...Aragorn,
                  sp: Math.max(0, Aragorn.sp -25),
                  };
              });
              }else {
                setAction ( "Aragorn attacks the Uruk-hai with his sword ⚔️" );
                soundAttackSword();
                setUrukhai((Urukhai) => {
                    return {
                    ...Urukhai,
                    hp: Math.max(0, Urukhai.hp - aragorn.attackPower),
                    };
                });
                setAragorn((Aragorn) => {
                    return {
                    ...Aragorn,
                    sp: Math.max(0, Aragorn.sp -25),
                    };
                });
                setResult(`${aragorn.name}, SP: ${aragorn.sp}`)
                setResult2(`${urukhai.name}, HP: ${urukhai.hp} ⚔️`);
              }
              }
              }
            }
            };
            const aragornAttackSaruman = () => {
              playerExist();
              switchTurn();
              if (saruman.hp <= 0){
                 Swal.fire("Saruman is dead, choose another target");
                 teamWins(); 
              } else {
              if (aragorn.hp <= 0) {
                return setAction ("Aragorn is dead! 💀");
              }else {
              if (aragorn.sp <= 25) {
                return setAction ("Aragorn can't move");
              } else if (saruman.hp <= 0){
                 setAction ("Saruman is dead! 💀")
              } if (saruman.hp <= 0 && urukhai.hp <= 0 && troll.hp <= 0) {
                return Swal.fire(
                  "Good job!",
                  "Team 1 wins!",
                  "success"
                )
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.25){
                    setAction ("Aragorn missed the attack");
                    soundFailMetal();
                    setAragorn((Aragorn) => {
                      return {
                      ...Aragorn,
                      sp: Math.max(0, Aragorn.sp -25),
                      };
                  });
                  }else {
                    setAction ( "Aragorn attacks Saruman with his sword ⚔️" );
                    soundAttackSword();
                    setSaruman((Saruman) => {
                        return {
                        ...Saruman,
                        hp: Math.max(0, Saruman.hp - aragorn.attackPower),
                        };
                    });
                    setAragorn((Aragorn) => {
                        return {
                        ...Aragorn,
                        sp: Math.max(0, Aragorn.sp -25),
                        };
                    });
                    setResult(`${aragorn.name}, SP: ${aragorn.sp}`)
                    setResult2(`${saruman.name}, HP: ${saruman.hp} ⚔️`);
                  }
                  }
                  }
                }
                };    
    
    const legolasAttackTroll = () => {
      playerExist();
      if (troll.hp <= 0){
        Swal.fire("The Troll is dead, choose another target");
        teamWins();
      } else {
      if (legolas.hp <= 0) {
        return setAction ("Legolas is dead! 💀");
      }else {
      if (legolas.sp <= 25) {
        return setAction ("Legolas can't move");
      } else if (troll.hp <= 0){
         setAction ("The Troll is dead! 💀")
      } if (troll.hp <= 0 && urukhai.hp <= 0 && saruman.hp <= 0) {
        return Swal.fire(
          "Good job!",
          "Team 1 wins!",
          "success"
        )
        } else {
          let randomNumber = Math.random();
          if (randomNumber < 0.15){
            setAction ("Legolas missed the attack");
            soundFailArrow();
            setLegolas((Legolas) => {
              return {
              ...Legolas,
              sp: Math.max(0, Legolas.sp -25),
              };
          });
          }else {
            setAction ( "Legolas shoots an arrow at the Troll 🏹" );
            soundAttackArrow();
            setTroll((Troll) => {
                return {
                ...Troll,
                hp: Math.max(0, Troll.hp - legolas.attackPower),
                };
            });
            setLegolas((Legolas) => {
                return {
                ...Legolas,
                sp: Math.max(0, Legolas.sp -25),
                };
            });
            setResult(`${legolas.name}, SP: ${legolas.sp}`)
            setResult2(`${troll.name}, HP: ${troll.hp} ⚔️`);
            
          }
          }
          }
        }
        };
        const legolasAttackUrukhai = () => {
          playerExist();
          if (urukhai.hp <= 0){
            Swal.fire("The Uruk-hai is dead, choose another target");
            teamWins();
          } else {
          if (legolas.hp <= 0) {
            return setAction ("Legolas is dead! 💀");
          }else {
          if (legolas.sp <= 25) {
            return setAction ("Legolas can't move");
          } else if (urukhai.hp <= 0){
             setAction ("The Uruk-hai is dead! 💀")
          } if (urukhai.hp <= 0 && troll.hp <= 0 && saruman.hp <= 0) {
            return Swal.fire(
              "Good job!",
              "Team 1 wins!",
              "success"
            )
            } else {
              let randomNumber = Math.random();
              if (randomNumber < 0.15){
                setAction ("Legolas missed the attack");
                soundFailArrow();
                setLegolas((Legolas) => {
                  return {
                  ...Legolas,
                  sp: Math.max(0, Legolas.sp -25),
                  };
              });
              }else {
                setAction ( "Legolas shoots an arrow at the Uruk-hai 🏹" );
                soundAttackArrow();
                setUrukhai((Urukhai) => {
                    return {
                    ...Urukhai,
                    hp: Math.max(0, Urukhai.hp - legolas.attackPower),
                    };
                });
                setLegolas((Legolas) => {
                    return {
                    ...Legolas,
                    sp: Math.max(0, Legolas.sp -25),
                    };
                });
                setResult(`${legolas.name}, SP: ${legolas.sp}`)
                setResult2(`${urukhai.name}, HP: ${urukhai.hp} ⚔️`);
              }
              }
              }
            }
            }; 

            const legolasAttackSaruman = () => {
              playerExist();
              if (saruman.hp <= 0){
                Swal.fire("Saruman is dead, choose another target");
                teamWins();
              } else {
              if (legolas.hp <= 0) {
                return setAction ("Legolas is dead! 💀");
              }else {
              if (legolas.sp <= 25) {
                return setAction ("Legolas can't move");
              } else if (saruman.hp <= 0){
                 setAction ("Saruman is dead! 💀")
              } if (saruman.hp <= 0 && urukhai.hp <= 0 && troll.hp <= 0) {
                return Swal.fire(
                  "Good job!",
                  "Team 1 wins!",
                  "success"
                )
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.15){
                    setAction ("Legolas missed the attack");
                    soundFailArrow();
                    setLegolas((Legolas) => {
                      return {
                      ...Legolas,
                      sp: Math.max(0, Legolas.sp -25),
                      };
                  });
                  }else {
                    setAction ( "Legolas shoots an arrow at Saruman 🏹" );
                    soundAttackArrow();
                    setSaruman((Saruman) => {
                        return {
                        ...Saruman,
                        hp: Math.max(0, Saruman.hp - legolas.attackPower),
                        };
                    });
                    setLegolas((Legolas) => {
                        return {
                        ...Legolas,
                        sp: Math.max(0, Legolas.sp -25),
                        };
                    });
                    setResult(`${legolas.name}, SP: ${legolas.sp}`)
                    setResult2(`${saruman.name}, HP: ${saruman.hp} ⚔️`);
                  }
                  }
                  }
                }
                }; 
            const gandalfHealAragorn = () => {
              playerExist();
              if (gandalf.hp <= 0) {
                return setAction("Gandalf is dead! 💀");
              } else {
                if (gandalf.sp <= 25) {
                  return setAction("Gandalf can't move");
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.10) {
                    setAction("Gandalf failed the heal");
                    setGandalf((Gandalf) => {
                      return {
                        ...Gandalf,
                        sp: Math.max(0, Gandalf.sp -25),
                      };
                    });
                  } else {
                    soundHeal();
                    setAction("Gandalf heal Aragorn 💗");
                    console.log("he pasado por aqui")
                    audio1.play();
                    setAragorn((Aragorn) => {
                      return {
                        ...Aragorn,
                        hp: Aragorn.hp + 35,
                      };
                    });
                    setGandalf((Gandalf) => {
                      return {
                        ...Gandalf,
                        sp: Math.max(0, Gandalf.sp -25),
                      };
                    });
                    setResult(`${gandalf.name}, SP: ${gandalf.sp}`);
                    setResult2(`${aragorn.name}, HP: ${aragorn.hp} 💗`);
                  }
                }
              }
            };
            const gandalfHealLegolas = () => {
              playerExist();
              if (gandalf.hp <= 0) {
                return setAction("Gandalf is dead! 💀");
              } else {
                if (gandalf.sp <= 25) {
                  return setAction("Gandalf can't move");
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.10) {
                    setAction("Gandalf failed the heal");
                    setGandalf((Gandalf) => {
                      return {
                        ...Gandalf,
                        sp: Math.max(0, Gandalf.sp -25),
                      };
                    });
                  } else {
                    soundHeal();
                    setAction("Gandalf heal Legolas 💗");
                    setLegolas((Legolas) => {
                      return {
                        ...Legolas,
                        hp: Legolas.hp + 35,
                      };
                    });
                    setGandalf((Gandalf) => {
                      return {
                        ...Gandalf,
                        sp: Math.max(0, Gandalf.sp -25),
                      };
                    });
                    setResult(`${gandalf.name}, SP: ${gandalf.sp}`);
                    setResult2(`${legolas.name}, HP: ${legolas.hp} 💗`);
                  }
                }
              }
            };
            const gandalfRecoverSp = () => {
              playerExist();
              if (gandalf.hp <= 0) {
                return setAction("Gandalf is dead! 💀");
              } else {
                if (gandalf.sp <= 35) {
                  return setAction("Gandalf can't move");
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.15) {
                    setAction("Gandalf failed to recover the party");
                    setGandalf((Gandalf) => {
                      return {
                        ...Gandalf,
                        sp: Math.max(0, Gandalf.sp -35),
                      };
                    });
                  } else {
                    setAction("Gandalf cast his spell and the party recovered special points.");
                    setLegolas((prevLegolas) => {
                      return {
                        ...prevLegolas,
                        sp: prevLegolas.sp + 35,
                      };
                    });
                    setAragorn((prevAragorn) => {
                      return {
                        ...prevAragorn,
                        sp: prevAragorn.sp + 35,
                      };
                    });
                    setGandalf((prevGandalf) => {
                      return {
                        ...prevGandalf,
                        sp: prevGandalf.sp + 35,
                      };
                    });
                    setGandalf((Gandalf) => {
                      return {
                        ...Gandalf,
                        sp: Math.max(0, Gandalf.sp -35),
                      };
                    });
                    setResult(`${gandalf.name}, SP: ${gandalf.sp}`);
                    setResult2(`${legolas.name}, SP: ${legolas.sp}` + " - " + `${aragorn.name}, SP: ${aragorn.sp}`);
                  }
                }
              }
            };        
    
       

    const handleShowInfoAragorn = (aragorn) => {
      if (aragorn.hp <= 0) {
        setAction("Aragorn is dead! 💀");
      } else if (aragorn.sp < 25) {
        setAction("Insufficient SP power, Aragorn must be recovered");
      } else {
        setInfo(`${aragorn.name}, HP: ${aragorn.hp}, SP: ${aragorn.sp}, Attack Power: ${aragorn.attackPower}`);
      }
    };
    
    const handleShowInfoLegolas = (legolas) => {
      if (legolas.hp <= 0) {
        setAction("Legolas is dead! 💀");
      } else if (legolas.sp < 25) {
        setAction("Insufficient SP power, Legolas must be recovered ");
      } else {
        setInfo(`${legolas.name}, HP: ${legolas.hp}, SP: ${legolas.sp} , Attack Power: ${legolas.attackPower}`);
      }
    }

    const handleShowInfoGandalf = (gandalf) => {
      if (gandalf.hp <= 0) {
        setAction("Gandalf is dead! 💀");
      } else if (gandalf.sp < 25) {
        setAction("Insufficient SP power, Gandalf must be recovered");
      } else {
        setInfo(`${gandalf.name}, HP: ${gandalf.hp}, SP: ${gandalf.sp} , Heal Power: ${gandalf.healPower} , Recover Capacity: ${gandalf.recoverSp}`);
      }
    }

    const teamWins = () => {
      if (troll.hp <= 0 && urukhai.hp <= 0 && saruman.hp <= 0 ) {
        const gifUrl = "https://huorgaldorion.files.wordpress.com/2020/09/rohirrim.gif";
        soundVictoryHumans();
        const gifHtml = `<img src="${gifUrl}" width="500" height="200" />`;
        Swal.fire({
          html: gifHtml,
          showConfirmButton: false,
          allowOutsideClick: false,
          timer: 8000 
        }).then(() => {
          Swal.fire(
            "The Human Race will prevail!",
            "Team 1 wins!",
            "success"
          );
        });
      }
    };

    // Team 2:**********************************************************************************************************************************
    const trollAttackAragorn = () => {
      playerExist();
      switchTurn();
      if (aragorn.hp <= 0){     
        Swal.fire("Aragorn is already dead, choose another target");
        teamWins2();
      } else {
      if (troll.hp <= 0) {
        return setAction2 ("The Troll is dead!");
      }else {
      if (troll.sp <= 25) {
        return setAction2 ("The Troll can't move");
      } else if (aragorn.hp <= 0){
         setAction2 ("Aragorn is dead!")
         
         
      } if (aragorn.hp <= 0 && legolas.hp <= 0 && gandalf.hp <= 0) {
        return Swal.fire(
          "Good job!",
          "Team 2 wins!",
          "success"
        )
        } else {
          let randomNumber = Math.random();
          if (randomNumber < 0.4){
            setAction2 ("The Troll missed the attack");
            soundFailMetal();
            setTroll((Troll) => {
              return {
              ...Troll,
              sp: Math.max(0, Troll.sp -25),
              };
          });
          }else {
            setAction2 ( "The Troll attacks Aragorn with his giant hammer 🔨" );
            soundAttackHammer();
            setAragorn((Aragorn) => {
                return {
                ...Aragorn,
                hp: Math.max(0, Aragorn.hp - troll.attackPower),
                };
            });
            setTroll((Troll) => {
                return {
                ...Troll,
                sp: Math.max(0, Troll.sp -25),
                };
            });
            setResult(`${aragorn.name}, HP: ${aragorn.hp}`)
            setResult2(`${troll.name}, SP: ${troll.sp}`);
            
          }
          }
          }
        }
        };

        const trollAttackLegolas = () => {
          playerExist();
          switchTurn();
          if (legolas.hp <= 0){
            Swal.fire("Legolas is already dead, choose another target");
            teamWins2();
          } else {
          if (troll.hp <= 0) {
            return setAction2 ("The Troll is dead!");
          }else {
          if (troll.sp <= 25) {
            return setAction2 ("The Troll can't move");
          } else if (legolas.hp <= 0){
             setAction2 ("Legolas is dead!")
          } if (legolas.hp <= 0 && aragorn.hp <= 0 && gandalf.hp <= 0) {
            return Swal.fire(
              "Good job!",
              "Team 2 wins!",
              "success"
            )
            } else {
              let randomNumber = Math.random();
              if (randomNumber < 0.4){
                setAction2 ("The Troll missed the attack");
                soundFailMetal();
                setTroll((Troll) => {
                  return {
                  ...Troll,
                  sp: Math.max(0, Troll.sp -25),
                  };
              });
              }else {
                setAction2 ( "The Troll attacks Legolas with his giant hammer 🔨" );
                soundAttackHammer();
                setLegolas((Legolas) => {
                    return {
                    ...Legolas,
                    hp: Math.max(0, Legolas.hp - troll.attackPower),
                    };
                });
                setTroll((Troll) => {
                    return {
                    ...Troll,
                    sp: Math.max(0, Troll.sp -25),
                    };
                });
                setResult(`${legolas.name}, HP: ${legolas.hp}`)
                setResult2(`${troll.name}, SP: ${troll.sp}`);
              }
              }
              }
            }
            }; 

            const trollAttackGandalf = () => {
              playerExist();
              switchTurn();
              if (gandalf.hp <= 0){
                Swal.fire("Gandalf is already dead, choose another target");
                teamWins2();
              } else {
              if (troll.hp <= 0) {
                return setAction2 ("The Troll is dead!");
              }else {
              if (troll.sp <= 25) {
                return setAction2 ("The Troll can't move");
              } else if (gandalf.hp <= 0){
                 setAction2 ("Gandalf is dead!")
              } if (legolas.hp <= 0 && aragorn.hp <= 0 && gandalf.hp <= 0) {
                return Swal.fire(
                  "Good job!",
                  "Team 2 wins!",
                  "success"
                )
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.4){
                    setAction2 ("The Troll missed the attack");
                    soundFailMetal();
                    setTroll((Troll) => {
                      return {
                      ...Troll,
                      sp: Math.max(0, Troll.sp -25),
                      };
                  });
                  }else {
                    setAction2 ( "The Troll attacks Gandalf with his giant hammer 🔨" );
                    soundAttackHammer();
                    setGandalf((Gandalf) => {
                        return {
                        ...Gandalf,
                        hp: Math.max(0, Gandalf.hp - troll.attackPower),
                        };
                    });
                    setTroll((Troll) => {
                        return {
                        ...Troll,
                        sp: Math.max(0, Troll.sp -25),
                        };
                    });
                    setResult(`${gandalf.name}, HP: ${gandalf.hp}`)
                    setResult2(`${troll.name}, SP: ${troll.sp}`);
                  }
                  }
                  }
                }
                };            
    

    const urukhaiAttackAragorn = () => {
      playerExist();
      if (aragorn.hp <= 0){
        Swal.fire("Aragorn is already dead, choose another target");
        teamWins2();
      } else {
      if (urukhai.hp <= 0) {
        return setAction2 ("The Uruk-hai is dead!");
      }else {
      if (urukhai.sp <= 25) {
        return setAction2 ("The Uruk-hai can't move");
      } else if (aragorn.hp <= 0){
         setAction2 ("Aragorn is dead!")
      } if (aragorn.hp <= 0 && legolas.hp <= 0 && gandalf.hp <= 0) {
        return Swal.fire(
          "Good job!",
          "Team 2 wins!",
          "success"
        )
        } else {
          let randomNumber = Math.random();
          if (randomNumber < 0.2){
            setAction2 ("The Uruk-hai missed the attack");
            soundFailMetal();
            setUrukhai((Urukhai) => {
              return {
              ...Urukhai,
              sp: Math.max(0, Urukhai.sp -25),
              };
          });
          }else {
            setAction2 ( "The Uruk-hai attacks Aragorn with his spear" );
            soundAttackSpear();
            setAragorn((Aragorn) => {
                return {
                ...Aragorn,
                hp: Math.max(0, Aragorn.hp - urukhai.attackPower),
                };
            });
            setUrukhai((Urukhai) => {
                return {
                ...Urukhai,
                sp: Math.max(0, Urukhai.sp -25),
                };
            });
            setResult(`${aragorn.name}, HP: ${aragorn.hp}`)
            setResult2(`${urukhai.name}, SP: ${urukhai.sp}`);
            
          }
          }
          }
        }
        };
        const urukhaiAttackLegolas = () => {
          playerExist();
          if (legolas.hp <= 0){
            Swal.fire("Legolas is already dead, choose another target");
            teamWins2();
          } else {
          if (urukhai.hp <= 0) {
            return setAction2 ("The Uruk-hai is dead!");
          }else {
          if (urukhai.sp <= 25) {
            return setAction2 ("The Uruk-hai can't move");
          } else if (legolas.hp <= 0){
             setAction2 ("Legolas is dead!")
          } if (aragorn.hp <= 0 && legolas.hp <= 0 && gandalf.hp <= 0) {
            return Swal.fire(
              "Good job!",
              "Team 2 wins!",
              "success"
            )
            } else {
              let randomNumber = Math.random();
              if (randomNumber < 0.2){
                setAction2 ("The Uruk-hai missed the attack");
                soundFailMetal();
                setUrukhai((Urukhai) => {
                  return {
                  ...Urukhai,
                  sp: Math.max(0, Urukhai.sp -25),
                  };
              });
              }else {
                setAction2 ( "The Uruk-hai attacks Legolas with his spear" );
                soundAttackSpear();
                setLegolas((Legolas) => {
                    return {
                    ...Legolas,
                    hp: Math.max(0, Legolas.hp - urukhai.attackPower),
                    };
                });
                setUrukhai((Urukhai) => {
                    return {
                    ...Urukhai,
                    sp: Math.max(0, Urukhai.sp -25),
                    };
                });
                setResult(`${legolas.name}, HP: ${legolas.hp}`)
                setResult2(`${urukhai.name}, SP: ${urukhai.sp}`);
              }
              }
              }
            }
            }; 
            const urukhaiAttackGandalf = () => {
              playerExist();
              if (gandalf.hp <= 0){
                Swal.fire("Gandalf is already dead, choose another target");
                teamWins2();
              } else {
              if (urukhai.hp <= 0) {
                return setAction2 ("The Uruk-hai is dead!");
              }else {
              if (urukhai.sp <= 25) {
                return setAction2 ("The Uruk-hai can't move");
              } else if (gandalf.hp <= 0){
                 setAction2 ("Legolas is dead!")
              } if (aragorn.hp <= 0 && legolas.hp <= 0 && gandalf.hp <= 0) {
                return Swal.fire(
                  "Good job!",
                  "Team 2 wins!",
                  "success"
                )
                } else {
                  let randomNumber = Math.random();
                  if (randomNumber < 0.2){
                    setAction2 ("The Uruk-hai missed the attack");
                    soundFailMetal();
                    setUrukhai((Urukhai) => {
                      return {
                      ...Urukhai,
                      sp: Math.max(0, Urukhai.sp -25),
                      };
                  });
                  }else {
                    setAction2 ( "The Uruk-hai attacks Gandalf with his spear" );
                    soundAttackSpear();
                    setGandalf((Gandalf) => {
                        return {
                        ...Gandalf,
                        hp: Math.max(0, Gandalf.hp - urukhai.attackPower),
                        };
                    });
                    setUrukhai((Urukhai) => {
                        return {
                        ...Urukhai,
                        sp: Math.max(0, Urukhai.sp -25),
                        };
                    });
                    setResult(`${gandalf.name}, HP: ${gandalf.hp}`)
                    setResult2(`${urukhai.name}, SP: ${urukhai.sp}`);
                  }
                  }
                  }
                }
                };               
                const sarumanHealTroll = () => {
                  playerExist();
                  if (saruman.hp <= 0) {
                    return setAction2("Saruman is dead! 💀");
                  } else {
                    if (saruman.sp <= 25) {
                      return setAction2("Saruman can't move");
                    } else {
                      let randomNumber = Math.random();
                      if (randomNumber < 0.10) {
                        setAction2("Saruman failed the heal");
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Math.max(0, Saruman.sp -25),
                          };
                        });
                      } else {
                        soundHeal();
                        setAction2("Saruman heal the Troll 💗");
                        setTroll((Troll) => {
                          return {
                            ...Troll,
                            hp: Troll.hp + 35,
                          };
                        });
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Math.max(0, Saruman.sp -25),
                          };
                        });
                        setResult(`${saruman.name}, SP: ${saruman.sp}`);
                        setResult2(`${troll.name}, HP: ${troll.hp} 💗`);
                      }
                    }
                  }
                };
                const sarumanHealUrukhai = () => {
                  playerExist();
                  if (saruman.hp <= 0) {
                    return setAction2("Saruman is dead! 💀");
                  } else {
                    if (saruman.sp <= 25) {
                      return setAction2("Saruman can't move");
                    } else {
                      let randomNumber = Math.random();
                      if (randomNumber < 0.10) {
                        setAction2("Saruman failed the heal");
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Math.max(0, Saruman.sp -25),
                          };
                        });
                      } else {
                        soundHeal();
                        setAction2("Saruman heal the Uruk-hai 💗");
                        setUrukhai((Urukhai) => {
                          return {
                            ...Urukhai,
                            hp: Urukhai.hp + 35,
                          };
                        });
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Math.max(0, Saruman.sp -25),
                          };
                        });
                        setResult(`${saruman.name}, SP: ${saruman.sp}`);
                        setResult2(`${urukhai.name}, HP: ${urukhai.hp} 💗`);
                      }
                    }
                  }
                };
                const sarumanRecoverSp = () => {
                  playerExist();
                  if (saruman.hp <= 0) {
                    return setAction2("Saruman is dead! 💀");
                  } else {
                    if (saruman.sp <= 35) {
                      return setAction2("Saruman can't move");
                    } else {
                      let randomNumber = Math.random();
                      if (randomNumber < 0.15) {
                        setAction2("Saruman failed to recover the party");
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Math.max(0, Saruman.sp -35),
                          };
                        });
                      } else {
                        setAction2("Saruman cast his spell and the party recovered special points.");
                        setUrukhai((Urukhai) => {
                          return {
                            ...Urukhai,
                            sp: Urukhai.sp + 35,
                          };
                        });
                        setTroll((Troll) => {
                          return {
                            ...Troll,
                            sp: Troll.sp + 35,
                          };
                        });
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Saruman.sp + 35,
                          };
                        });
                        setSaruman((Saruman) => {
                          return {
                            ...Saruman,
                            sp: Math.max(0, Saruman.sp -35),
                          };
                        });
                        setResult(`${saruman.name}, SP: ${saruman.sp}`);
                        setResult2(`${urukhai.name}, SP: ${urukhai.sp}` + " - " + `${troll.name}, SP: ${troll.sp}`);
                      }
                    }
                  }
                };      

    const showInfoTroll = (troll) => {
      if (troll.hp <= 0) {
        setAction2("The Troll is dead!");
      } else if (troll.sp < 25) {
        setAction2("Insufficient SP power, must be recovered");
      } else {
        setInfo2(`${troll.name}, HP: ${troll.hp}, SP: ${troll.sp}, Atack Power: ${troll.attackPower}`);
      }
    }
    const showInfoUrukhai = (urukhai) => {
      if (urukhai.hp <= 0) {
        setAction2("The Uruk-hai is dead!");
      } else if (urukhai.sp < 25) {
        setAction2("Insufficient SP power, must be recovered");
      } else {
        setInfo2(`${urukhai.name}, HP: ${urukhai.hp}, SP: ${urukhai.sp}, Atack Power: ${urukhai.attackPower}`);
      }
    }
    const showInfoSaruman = (saruman) => {
      if (saruman.hp <= 0) {
        setAction2("Saruman is dead!");
      } else if (saruman.sp < 25) {
        setAction2("Insufficient SP power, Saruman must be recovered");
      } else {
        setInfo2(`${saruman.name}, HP: ${saruman.hp}, SP: ${saruman.sp} , Heal Power: ${saruman.healPower} , Recover Capacity: ${saruman.recoverSp}`);
      }
    }

    //Gif end game
    const teamWins2 = () => {
      if (aragorn.hp <= 0 && legolas.hp <= 0 && gandalf.hp <= 0 ) {
        const gifUrl2 = "https://thumbs.gfycat.com/AntiqueWideIberianlynx-size_restricted.gif";
        soundVictoryDarkness();
        const gifHtml2 = `<img src="${gifUrl2}" width="500" height="200" />`;
        Swal.fire({
          html: gifHtml2,
          showConfirmButton: false,
          allowOutsideClick: false,
          timer: 7000 
        }).then(() => {
          Swal.fire(
            "The Age of the Orcs has begun!",
            "Team 2 wins!",
            "success"
          );
        });
      }
    }; 
   
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    

    const handleStartGame = () => {
      Swal.fire({
        width: "80%",
        padding: "70px",
        title: "Enter the name of player 1 and player 2",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Player 1">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Player 2">',
        confirmButtonText: "OK",
        focusConfirm: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        preConfirm: () => {
          const playerName1 = document.querySelector("#swal-input1").value;
          const playerName2 = document.querySelector("#swal-input2").value;
          if (!playerName1 || !playerName2) {
            Swal.showValidationMessage("Please enter a name for both players");
            return false;
          }
          if (playerName1 === playerName2) {
            Swal.showValidationMessage("The player names cannot be the same");
            return false;
          }
          setPlayer1Name(playerName1);
          setPlayer2Name(playerName2);
          return true;
        },
      }).then((result) => {
        if (result.isConfirmed) {
          playSound();
          const startMessage = startGame();
          setGame(startMessage);
        }
      });
    };


    const startGame = () => {
      
      let numberRandom = Math.random();
      if (numberRandom < 0.5) {
        return ("Start player 1"); //(`Start ${player1Name}`);
      } else {
        return ("Start player 2"); //(`Start ${player2Name}`);
      }
      
    };
    const mostrarResultado = () => {
      handleStartGame().then(() => {
        const resultado = startGame();
        setGame(resultado);
      });
    };

    const playerExist = () => {
      if (!player1Name | !player2Name) {
        mostrarResultado();
      }  
    }

    const switchTurn = () => {
      setCurrentTurn(currentTurn === 1 ? 2 : 1);
    };

    
  return(
    <>

    <button onClick= { mostrarResultado }> Start Game  </button>
    <input type="text" value={ game } autoComplete="off" readOnly/>

    <div className="container">
        <form> 
          <input type="text1"  value= { action } autoComplete='off' readOnly/>      
          <input type="text1"  value= { info } autoComplete='off' readOnly/>      
        </form>      
        <div className="keypad">     
          <button1 className="highlight" onClick={handleShowInfoLegolas.bind ( null, legolas) } > <img src="https://www.factinate.com/wp-content/uploads/2017/11/Screenshot-from-2019-07-18-13-41-10.png" style={ { width: '55px', height: '55px' }} /> </button1>
          <button onClick={legolasAttackTroll} className={currentTurn === 1 && legolas.hp <= 0 ? "disabledHp" : "" + legolas.sp <= 25 ? "disabledSp" : ""} > Shoot Troll </ button> 
          <button onClick={legolasAttackUrukhai} className={currentTurn === 1 && legolas.hp <= 0 ? "disabledHp" : "" + legolas.sp <= 25 ? "disabledSp" : ""}> Shoot Uruk-hai </button>       
          <button onClick={legolasAttackSaruman} className={currentTurn === 1 && legolas.hp <= 0 ? "disabledHp" : "" + legolas.sp <= 25 ? "disabledSp" : ""}> Shoot Saruman </button>

          <button2 className="highlight" onClick={handleShowInfoAragorn.bind ( null, aragorn)} > <img src="https://images2.fanpop.com/images/photos/7600000/King-Aragorn-aragorn-7625302-1024-768.jpg" style={ { width: '55px', height: '55px' }} /> </button2>
          <button onClick={aragornAttackTroll} className={currentTurn === 1 && aragorn.hp <= 0 ? "disabledHp" : "" + aragorn.sp <= 25 ? "disabledSp" : ""}> Attack Troll </button>
          <button onClick={aragornAttackUrukhai} className={currentTurn === 1 && aragorn.hp <= 0 ? "disabledHp" : "" + aragorn.sp <= 25 ? "disabledSp" : ""}> Attack Uruk-hai </button>
          <button onClick={aragornAttackSaruman} className={currentTurn === 1 && aragorn.hp <= 0 ? "disabledHp" : "" + aragorn.sp <= 25 ? "disabledSp" : ""}> Attack Saruman </button>

          <button3 className="highlight" onClick={handleShowInfoGandalf.bind ( null, gandalf)} > <img src="https://www.gearfuse.com/wp-content/uploads/2013/07/Gandalf-500x375.jpg" style={ { width: '55px', height: '55px' }} /> </button3>
          <button onClick={gandalfHealAragorn} className={currentTurn === 1 && gandalf.hp <= 0 ? "disabledHp" : "" + gandalf.sp <= 35 ? "disabledSp" : ""}> Heal Aragorn </button>
          <button onClick={gandalfHealLegolas} className={currentTurn === 1 && gandalf.hp <= 0 ? "disabledHp" : "" + gandalf.sp <= 35 ? "disabledSp" : ""}> Heal Legolas </button>
          <button onClick={gandalfRecoverSp} className={currentTurn === 1 && gandalf.hp <= 0 ? "disabledHp" : "" + gandalf.sp <= 35 ? "disabledSp" : ""}> Recover Sp </button>
          


          
                      
        </div>    
    </div>

    <div className="container2">
        <form> 
          <input type="text1"  value= { action2 } autoComplete='off' readOnly/>
          <input type="text1"  value= { info2 } autoComplete='off' readOnly/>      
        </form>   
        <div className="keypad">     
        
          <button onClick={trollAttackAragorn} className={currentTurn === 2 && troll.hp <= 0 ? "disabledHp" : "" + troll.sp <= 25 ? "disabledSp" : ""}> Attack Aragorn </button>
          <button onClick={trollAttackLegolas} className={currentTurn === 2 && troll.hp <= 0 ? "disabledHp" : "" + troll.sp <= 25 ? "disabledSp" : ""}> Attack Legolas </button>
          <button onClick={trollAttackGandalf} className={currentTurn === 2 && troll.hp <= 0 ? "disabledHp" : "" + troll.sp <= 25 ? "disabledSp" : ""}> Attack Gandalf </button>
          <button4 className="highlight" onClick={showInfoTroll.bind ( null, troll)}><img src="https://4.bp.blogspot.com/-_5Iiybb5Ugg/VVs2158qaAI/AAAAAAAAGbw/xwhnMnkoQds/s1600/cavernaman.jpeg" style={ { width: '55px', height: '55px' }} /> </button4>
          <button onClick={urukhaiAttackAragorn} className={urukhai.hp <= 0 ? "disabledHp" : "" + urukhai.sp <=25 ? "disabledSp" : ""}> Attack Aragorn </button>
          <button onClick={urukhaiAttackLegolas} className={urukhai.hp <= 0 ? "disabledHp" : "" + urukhai.sp <=25 ? "disabledSp" : ""}> Attack Legolas </button>
          <button onClick={urukhaiAttackGandalf} className={urukhai.hp <= 0 ? "disabledHp" : "" + urukhai.sp <=25 ? "disabledSp" : ""}> Attack Gandalf </button>
          <button5 className="highlight" onClick={showInfoUrukhai.bind ( null, urukhai)}> <img src="https://imgs.search.brave.com/uOT-onaQX5v3X8d1prJBuJCU5fpEV_klflc7cLTVPw4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/N0xMZUNRWDBoUVdy/VzVwVE52VnNnSGFF/OCZwaWQ9QXBp" style={ { width: '55px', height: '55px' }} /></button5> 
          <button onClick={sarumanRecoverSp} className={saruman.hp <= 0 ? "disabledHp" : "" + saruman.sp <= 35 ? "disabledSp" : ""}> Recover Sp </button>  
          <button onClick={sarumanHealUrukhai} className={saruman.hp <= 0 ? "disabledHp" : "" + saruman.sp <= 35 ? "disabledSp" : ""}> Heal Uruk-hai</button>
          <button onClick={sarumanHealTroll} className={saruman.hp <= 0 ? "disabledHp" : "" + saruman.sp <= 35 ? "disabledSp" : ""}> Heal Troll</button>
          <button6 className="highlight" onClick={showInfoSaruman.bind ( null, saruman)} > <img src="https://i0.wp.com/www.tor.com/wp-content/uploads/2015/07/LOTR-saruman.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&quality=100&ssl=1" style={ { width: '55px', height: '55px' }} /> </button6>              
        </div>  
    </div>
    
    <div className="container3">
        <form> 
          <input type="text1"  value= { result } autoComplete='off' readOnly/> 
          <input type="text1"  value= { result2 } autoComplete='off' readOnly/>
        </form>
    </div> 

    <div>

      <form>

        <div1 > <input type="text" value={player1Name} /> </div1>
        <div2 > <input type="text" value={player2Name} /> </div2>

      </form> 
    
       

    </div>
   
    

    </> 
  );
  };

  
